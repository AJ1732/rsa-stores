import Image from "next/image";
import { getCategories } from "@/data";

const CategorySection = async () => {
  const categories = await getCategories();

  return (
    <section className="py-20">
      <div className="space-y-[1.75rem] rounded-[1.25rem] bg-shade-200 px-6 py-10 md:space-y-[3rem] md:rounded-3xl md:px-12 md:py-12 lg:space-y-16 lg:rounded-[2.5rem] lg:px-[4.75rem] lg:py-16">
        <h2 className="text-center font-integral text-[2rem] leading-9 md:text-[2.5rem] lg:text-[3rem]">
          Browse By categories
        </h2>

        <div className="grid size-full gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ id, name, image }) => (
            <figure
              key={id}
              className="group relative min-h-72 overflow-hidden rounded-[1.25rem] bg-white md:[&:nth-child(1)]:col-span-2 lg:[&:nth-child(1)]:col-span-3 lg:[&:nth-child(2)]:col-span-2 lg:[&:nth-child(5)]:col-span-2"
            >
              <div className="absolute inset-0 z-[1] size-full [border-image:linear-gradient(hsl(220_15%_7%_/_0.5),_hsl(230_12%_12%_/_0.6))_fill_1]" />

              <h3 className="absolute left-9 top-6 z-[1] text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {name}
              </h3>
              <Image
                fill
                src={image}
                alt="Category Image"
                style={{ objectFit: "cover" }}
                className="transition-all duration-300 ease-in-out group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategorySection;
