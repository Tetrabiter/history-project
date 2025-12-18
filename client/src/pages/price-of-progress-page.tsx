import { Navigation } from "@/components/Navigation";
import { DataVisualization } from "@/components/DataVisualization";
import { Footer } from "@/components/Footer";

export default function PriceOfProgressPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <DataVisualization />
      </main>
      <Footer />
    </div>
  );
}
