"use client";
import { useEffect, useState } from "react";

type Weather = { temp: number; code: number };

const codeMap: Record<number, string> = {
  0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Cloudy",
  45: "Fog", 48: "Fog",
  51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
  61: "Rain", 63: "Rain", 65: "Heavy rain",
  71: "Snow", 73: "Snow", 75: "Heavy snow",
  80: "Showers", 81: "Showers", 82: "Heavy showers",
  95: "Storm", 96: "Storm", 99: "Storm",
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=34.0259&longitude=-118.7798&current=temperature_2m,weather_code&temperature_unit=celsius"
    )
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
        });
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  if (!weather) return null;

  return (
    <div
      className="hidden xl:flex items-center gap-2 px-3 py-2 text-[0.7rem] tracking-wider uppercase whitespace-nowrap"
      style={{ color: "rgba(245,241,232,0.55)" }}
    >
      <span>Malibu</span>
      <span style={{ color: "var(--color-gold)" }}>{weather.temp}°</span>
      <span>{codeMap[weather.code] || ""}</span>
    </div>
  );
}
