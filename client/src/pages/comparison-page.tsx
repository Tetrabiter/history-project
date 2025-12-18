import { Navigation } from "@/components/Navigation";
import { ComparisonModule } from "@/components/ComparisonModule";
import { Footer } from "@/components/Footer";

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ComparisonModule />
      </main>
      <Footer />
    </div>
  );
}
