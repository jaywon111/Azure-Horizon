"use client";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

export default function HomeGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const display = images.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {display.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative overflow-hidden rounded-2xl group"
            style={{ aspectRatio: i === 0 || i === 5 ? "1 / 1" : "4 / 3" }}
          >
            <img
              src={src}
              alt={`Azure Horizon — image ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={display}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
