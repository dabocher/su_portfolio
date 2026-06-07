"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const Carousel = <T,>({ items, renderItem }: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((i) => (i + 1) % items.length);

  return (
    <div className="relative">
      {renderItem(items[currentIndex])}

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto -translate-x-3/4 bg-white/70 hover:bg-white rounded-full p-1 shadow transition"
        >
          <ChevronLeft className="w-4 h-4 text-zinc-700" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto translate-x-3/4 bg-white/70 hover:bg-white rounded-full p-1 shadow transition"
        >
          <ChevronRight className="w-4 h-4 text-zinc-700" />
        </button>
      </div>
    </div>
  );
};
