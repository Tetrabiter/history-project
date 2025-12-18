import { Navigation } from "@/components/Navigation";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
