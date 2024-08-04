"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductProps } from "@/types/data";
import ProductCard from "../Card/ProductCard";

interface Props {
  products?: ProductProps[];
}
const ProductCarousel: React.FC<Props> = ({ products }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-[calc(100vw-2.5rem)] max-w-[77.5rem] pt-20"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="ml-0 gap-4">
        {products?.map(({ id, title, price, description, images }) => {
          const source = images[0];
          return (
            <CarouselItem
              key={id}
              className="mx-0 flex max-w-[10.75rem] items-center justify-center px-0 md:max-w-[18.5rem]"
            >
              <ProductCard
                id={id}
                key={id}
                title={title}
                src={source}
                description={description}
                price={price}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="absolute right-16 top-6 md:top-5 lg:top-3">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
