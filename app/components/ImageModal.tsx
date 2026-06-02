"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageModalProps {
  images: { id: number; src: string; alt: string }[];
}
const ImageModal = ({ images }: ImageModalProps) => {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] cursor-pointer"
            onClick={() => setSelectedSrc(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="rounded-lg object-cover hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>

      {selectedSrc && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSrc(null)}
        >
          <div className="relative w-full max-w-2xl aspect-[4/3]">
            <Image
              src={selectedSrc}
              alt="Imagen ampliada"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
