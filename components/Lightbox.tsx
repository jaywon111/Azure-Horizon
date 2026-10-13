"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null)
        onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft" && index !== null)
        onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, index, images.length, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(10,10,12,0.98)" }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 z-10 p-3 rounded-full transition-colors duration-300 hover:bg-white/10"
            style={{ color: "var(--color-cream)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Counter */}
          <div
            className="absolute top-6 left-6 md:top-9 md:left-9 z-10 text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,241,232,0.5)" }}
          >
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-colors duration-300 hover:bg-white/10"
            style={{ color: "var(--color-cream)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index + 1) % images.length);
            }}
            aria-label="Next"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-colors duration-300 hover:bg-white/10"
            style={{ color: "var(--color-cream)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <motion.img
            key={index}
            src={images[index]}
            alt={`Image ${index + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[86vh] object-contain rounded-lg"
          />

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 rounded-full max-w-[90vw] overflow-x-auto"
            style={{ background: "rgba(245,241,232,0.06)" }}
          >
            {images.map((src, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange(i);
                }}
                className="flex-shrink-0 rounded-full transition-opacity duration-300"
                style={{
                  width: "36px",
                  height: "36px",
                  opacity: i === index ? 1 : 0.4,
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: i === index ? "1.5px solid var(--color-gold)" : "1.5px solid transparent",
                }}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
