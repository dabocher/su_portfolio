"use client";

import { Carousel } from "@/app/components/Carousel";
import { CardBanner } from "@/app/components/CardBanner";
import { carteles } from "@/app/data";

const CartelesPage = () => {
  return (
    <Carousel
      items={carteles}
      renderItem={(cartel) => (
        <CardBanner
          key={cartel.id}
          title={cartel.title}
          description={cartel.description}
          year={cartel.year}
          id={cartel.id}
        />
      )}
    />
  );
};

export default CartelesPage;
