const CategorySection = () => {
  return (
    <section className="py-20">
      <div className="space-y-[1.75rem] rounded-[1.25rem] bg-shade-200 px-6 py-10 md:space-y-[3rem] md:rounded-3xl md:px-12 md:py-12 lg:space-y-16 lg:rounded-[2.5rem] lg:px-[4.75rem] lg:py-16">
        <h2 className="text-center font-integral text-[2rem] leading-9 md:text-[2.5rem] lg:text-[3rem]">
          BROWSE BY dress STYLE
        </h2>

        <div className="grid size-full gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="relative min-h-72 rounded-[1.25rem] bg-white md:[&:nth-child(1)]:col-span-2 lg:[&:nth-child(1)]:col-span-3 lg:[&:nth-child(2)]:col-span-2 lg:[&:nth-child(5)]:col-span-2"
            >
              <h3 className="absolute left-9 top-6 text-4xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategorySection;
