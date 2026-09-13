"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AccordionGallery({
  items,
  light = false,
}: {
  items: { name: string; desc: string; image: string }[];
  light?: boolean;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-[720px] md:h-[600px]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setActive(i)}
          onClick={() => setActive(i)}
          animate={{ flex: active === i ? 4 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl cursor-pointer"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "120px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: light
                ? "linear-gradient(to top, rgba(14,14,16,0.85) 0%, rgba(14,14,16,0.15) 55%, transparent 100%)"
                : "linear-gradient(to top, rgba(14,14,16,0.9) 0%, rgba(14,14,16,0.2) 55%, transparent 100%)",
            }}
          />

          <motion.div
            animate={{
              opacity: active === i ? 1 : 0,
              y: active === i ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: active === i ? 0.2 : 0 }}
            className="absolute bottom-8 left-8 right-8 text-cream"
          >
            <h3 className="display-3 mb-3">{item.name}</h3>
            <p className="body max-w-md" style={{ color: "rgba(245,241,232,0.85)" }}>
              {item.desc}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
