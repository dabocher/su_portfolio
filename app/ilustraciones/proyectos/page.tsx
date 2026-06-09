"use client";

import { Carousel } from "@/app/components/Carousel";
import { CardProject } from "@/app/components/CardProject";
import { proyectos } from "@/app/data";

const ProyectosPage = () => {
  return (
    <Carousel
      items={proyectos}
      renderItem={(proyecto) => (
        <CardProject
          key={proyecto.id}
          title={proyecto.title}
          description={proyecto.description}
          year={proyecto.year}
          id={proyecto.id}
          hasAnimation={proyecto.hasAnimation}
        />
      )}
    />
  );
};

export default ProyectosPage;
