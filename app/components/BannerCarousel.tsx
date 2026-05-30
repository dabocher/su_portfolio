"use client";

import { useState, useEffect } from "react";
import { CardBanner } from "./CardBanner";
import { carteles } from "../data";

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carteles.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const cartel = carteles[currentIndex];

  return (
    <div className="flex flex-col min-w-full items-center gap-6 ">
      <CardBanner
        key={cartel.id}
        title={cartel.title}
        description={cartel.description}
        year={cartel.year}
        id={cartel.id}
      />
      <div className="flex gap-2">
        {carteles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? "bg-red-600" : "bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
