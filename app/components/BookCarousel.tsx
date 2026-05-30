"use client";

import { useState, useEffect } from "react";
import { CardBook } from "./CardBook";
import { libros } from "../data";

export const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % libros.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const libro = libros[currentIndex];

  return (
    <div className="flex flex-col items-center gap-6 ">
      <CardBook
        key={libro.id}
        title={libro.title}
        description={libro.description}
        year={libro.year}
        author={libro.author}
        illustrator={libro.illustrator}
        id={libro.id}
      />
      <div className="flex gap-2">
        {libros.map((_, i) => (
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
