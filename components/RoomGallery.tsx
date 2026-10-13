"use client";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

export default function RoomGallery({
  images,
  roomName,
}: {
  images: string[];
  roomName: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mainIndex, setMainIndex] = useState(0);

  // Layout: 1 large hero + 4 smaller. On mobile: single hero + horizontal scroll.
  const heroImage = images[0];
  const sideImages = images.slice(1, 5);
  const extraCount = Math.max(0, images.length - 5);

  return (
    <>
      {/* Desktop: mosaic grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 rounded-2xl overflow-hidden" style={{ height: "560px" }}>
        <button
          onClick={() => setLightboxIndex(0)}
          className="col-span-3 row-span-2 relative overflow-hidden group"
        >
          <img
            src={heroImage}
            alt={`${roomName} — main view`}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <span
            className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[0.7rem] tracking-wider uppercase"
            style={{ background: "rgba(14,14,16,0.7)", color: "var(--color-cream)", backdropFilter: "blur(10px)" }}
          >
            {roomName}
          </span>
        </button>

        {sideImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i + 1)}
            className="relative overflow-hidden group"
          >
            <img
              src={src}
              alt={`${roomName} — view ${i + 2}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {i === sideImages.length - 1 && extraCount > 0 && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(14,14,16,0.65)" }}>
                <span className="text-cream heading" style={{ fontSize: "1.1rem" }}>+{extraCount}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Mobile: main + horizontal thumbnails */}
      <div className="md:hidden">
        <button
          onClick={() => setLightboxIndex(mainIndex)}
          className="w-full rounded-2xl overflow-hidden mb-3"
          style={{ aspectRatio: "4 / 3" }}
        >
          <img
            src={images[mainIndex]}
            alt={`${roomName} — view ${mainIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </button>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setMainIndex(i)}
              className="flex-shrink-0 rounded-lg overflow-hidden"
              style={{
                width: "80px",
                height: "80px",
                outline: i === mainIndex ? "2px solid var(--color-gold)" : "none",
                outlineOffset: "2px",
              }}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}
