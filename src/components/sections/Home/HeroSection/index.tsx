import { Button } from "@/components";

const stats = [
  {
    figures: 200,
    text: "International Brands",
  },
  {
    figures: 2000,
    text: "High-Quality Products",
  },
  {
    figures: 30000,
    text: "Happy Customers",
  },
];

const HeroSection = () => {
  return (
    <section className="full-width content-grid bg-shade-100 pb-28 pt-24">
      <div className="flex items-center justify-between gap-20 max-lg:flex-col lg:gap-8">
        <div className="max-w-[38rem] space-y-12">
          <div className="space-y-5 lg:space-y-8">
            <h2 className="font-integral text-4xl md:text-5xl max-md:max-w-[22.5rem] leading-[2.125rem] text-black lg:text-[4rem] lg:leading-[4rem]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>

            <p className="max-md:max-w-[22.5rem] text-sm text-black/60 md:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <Button label="Shop Now" className="px-14 py-4 w-full md:w-fit" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 space-x-2 md:justify-between">
            {stats.map(({ figures, text }, i) => (
              <div key={i}>
                <p className="text-[2.5rem] font-bold">{figures}+</p>
                <p className="text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="aspect-square w-96 rounded-full bg-neutral-500"></figure>
      </div>
    </section>
  );
};
export default HeroSection;
