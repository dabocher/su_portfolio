"use client";

import { CardAnimation } from "@/app/components/CardAnimation";
import { Carousel } from "@/app/components/Carousel";
import { animaciones } from "@/app/data";

const AnimacionesPage = () => {
  return (
    <Carousel
      items={animaciones}
      renderItem={(animacion) => (
        <CardAnimation
          key={animacion.id}
          title={animacion.title}
          description={animacion.description}
          id={animacion.id}
        />
      )}
    />
  );
};

export default AnimacionesPage;
