"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);
  p *= 0.75;

  // Faster flow
  float t = uTime * 0.09;

  // Layered noise for richer motion
  float n1 = snoise(p * 1.1 + vec2(t * 0.8, t * 0.4));
  float n2 = snoise(p * 2.3 + vec2(-t * 1.2, t * 0.6));
  float n3 = snoise(p * 4.5 + vec2(t * 1.6, -t * 1.0));
  float n4 = snoise(p * 0.6 + vec2(-t * 0.5, -t * 0.3));

  float pattern = (n1 * 0.4 + n2 * 0.3 + n3 * 0.15 + n4 * 0.15) * 0.5 + 0.5;
  pattern = pow(pattern, 0.9);

  // Warmer, richer palette — brighter than before
  vec3 deepNavy = vec3(0.04, 0.06, 0.12);
  vec3 ocean    = vec3(0.08, 0.14, 0.28);
  vec3 warmGold = vec3(0.85, 0.68, 0.42);
  vec3 amber    = vec3(0.95, 0.72, 0.42);

  vec3 color = mix(deepNavy, ocean, pattern);

  // Warm highlights — more aggressive
  float highlight = smoothstep(0.55, 1.0, pattern);
  color = mix(color, warmGold, highlight * 0.7);
  color = mix(color, amber, smoothstep(0.85, 1.0, pattern) * 0.5);

  // Radial warm glow — center-right bias
  vec2 glowCenter = vec2(0.3, -0.2);
  float glow = 1.0 - length((p - glowCenter) * 0.7);
  color += warmGold * smoothstep(0.0, 1.0, glow) * 0.15;

  // Vignette — softer than before
  float vig = 1.0 - length(p * 0.5);
  color *= mix(0.85, 1.0, smoothstep(0.0, 1.0, vig));

  // Grain
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  color += (grain - 0.5) * 0.025;

  gl_FragColor = vec4(color, 1.0);
}
`;

export default function ThreeHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(container.clientWidth, container.clientHeight),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10"
      style={{ width: "100%", height: "100%" }}
      aria-hidden
    />
  );
}
