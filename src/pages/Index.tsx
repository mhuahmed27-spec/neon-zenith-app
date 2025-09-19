import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import AdBanner from "@/components/AdBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import MotivationalQuotes from "@/components/MotivationalQuotes";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="pt-20 pb-24">
        <HeroSection />
        <AdBanner />
        <CategoryGrid />
        <FeaturesGrid />
        <ShowcaseCarousel />
        <MotivationalQuotes />
        <CallToAction />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Index;
