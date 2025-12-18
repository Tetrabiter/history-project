import { Navigation } from "@/components/Navigation";
import { SourcesCatalog } from "@/components/SourcesCatalog";
import { Footer } from "@/components/Footer";

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <SourcesCatalog />
      </main>
      <Footer />
    </div>
  );
}
