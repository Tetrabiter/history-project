import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ComparisonModule } from "@/components/ComparisonModule";
import { DataVisualization } from "@/components/DataVisualization";
import { PresentationHub } from "@/components/PresentationHub";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ComparisonModule />
        <DataVisualization />
        <PresentationHub />
      </main>
      <Footer />
    </div>
  );
}
