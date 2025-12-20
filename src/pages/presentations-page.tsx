import { Navigation } from "@/components/Navigation";
import { PresentationHub } from "@/components/PresentationHub";
import { Footer } from "@/components/Footer";

export default function PresentationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <PresentationHub />
      </main>
      <Footer />
    </div>
  );
}
