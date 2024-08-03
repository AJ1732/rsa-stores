import {
  HeroSection,
  ShopDisplaySection,
  CategorySection,
  CTASection,
} from "@/components";

export default async function Home() {
  return (
    <div className="full-width content-grid min-h-[calc(100dvh-100px)] text-neutral-950">
      <HeroSection />
      <ShopDisplaySection />
      <CategorySection />
      <CTASection />
    </div>
  );
}
