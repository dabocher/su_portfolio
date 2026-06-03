"use client";

import { useState, useEffect } from "react";
import { CardProject } from "./CardProject";
import { proyectos } from "../data";

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const proyecto = proyectos[currentIndex];

  return (
    <div className="flex flex-col items-center gap-6">
      <CardProject
        key={proyecto.id}
        title={proyecto.title}
        description={proyecto.description}
        year={proyecto.year}
        id={proyecto.id}
      />
      <div className="flex gap-2">
        {proyectos.map((_, i) => (
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
