import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import StatsAchievements from "@/components/StatsAchievements";
import Testimonials from "@/components/Testimonials";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Services />
      <StatsAchievements />
      <Testimonials />
    </div>
  );
}
