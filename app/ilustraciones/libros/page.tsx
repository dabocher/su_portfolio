"use client";

import { Carousel } from "@/app/components/Carousel";
import { libros } from "@/app/data";
import { CardBook } from "@/app/components/CardBook";
const LibrosPage = () => {
  return (
    <Carousel
      items={libros}
      renderItem={(libro) => (
        <CardBook
          key={libro.id}
          title={libro.title}
          description={libro.description}
          year={libro.year}
          id={libro.id}
          author={libro.author}
          illustrator={libro.illustrator}
        />
      )}
    />
  );
};

export default LibrosPage;
