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
    <div className="flex flex-col md:flex-row gap-3 h-[600px]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setActive(i)}
          onClick={() => setActive(i)}
          animate={{ flex: active === i ? 4 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl cursor-pointer min-h-[240px]"
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          <motion.div
            animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 20 }}
            transition={{ duration: 0.5, delay: active === i ? 0.2 : 0 }}
            className="absolute bottom-8 left-8 right-8"
          >
            <h3 className="display-2 mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.name}</h3>
            <p className="body-lg max-w-md">{item.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
