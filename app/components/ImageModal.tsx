"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface ImageModalProps {
  images: ImageItem[];
  renderModal?: (img: ImageItem) => React.ReactNode;
}

export const ImageModal = ({ images, renderModal }: ImageModalProps) => {
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] cursor-pointer"
            onClick={() => setSelectedImg(img)}
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

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          {renderModal ? (
            renderModal(selectedImg)
          ) : (
            <div className="relative w-full max-w-2xl ">
              <Image
                src={selectedImg.src}
                alt="Imagen ampliada"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
