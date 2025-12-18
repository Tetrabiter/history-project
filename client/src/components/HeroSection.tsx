import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Hammer } from "lucide-react";
import imperialImage from "@assets/generated_images/imperial_russian_railway_construction.png";
import sovietImage from "@assets/generated_images/soviet_constructivist_industrial_poster.png";

export function HeroSection() {
  return (
    <section className="min-h-screen relative" data-testid="section-hero">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imperialImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-amber-900/60" />
          <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-16">
            <div className="flex items-center gap-2 mb-4">
              <Factory className="w-6 h-6 text-amber-200" />
              <span className="text-amber-200 font-mono text-sm tracking-wider uppercase">
                1830s - 1913
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
              Imperial Capitalism
            </h2>
            <p className="text-amber-100/90 text-lg leading-relaxed max-w-md mb-6">
              Market-driven, state-guided industrialization through railways, 
              textiles, and foreign investment. Rapid growth with Western dependency.
            </p>
            <Link href="/comparison">
              <Button
                variant="outline"
                className="w-fit bg-white/10 backdrop-blur-sm border-amber-200/30 text-white"
                data-testid="button-explore-imperial"
              >
                Explore the Empire
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sovietImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-red-950/85 to-red-900/70" />
          <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-16">
            <div className="flex items-center gap-2 mb-4">
              <Hammer className="w-6 h-6 text-red-200" />
              <span className="text-red-200 font-mono text-sm tracking-wider uppercase">
                1928 - 1941
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
              Soviet Dictatorship
            </h2>
            <p className="text-red-100/90 text-lg leading-relaxed max-w-md mb-6">
              Forced state mobilization rejecting markets. Heavy industry and 
              military complex at immense social cost. Autarky and war readiness.
            </p>
            <Link href="/comparison">
              <Button
                variant="outline"
                className="w-fit bg-white/10 backdrop-blur-sm border-red-200/30 text-white"
                data-testid="button-explore-soviet"
              >
                Explore the USSR
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="w-1 h-32 bg-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-32 z-10" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center">
        <p className="text-muted-foreground text-sm mb-2">
          The strategic goal remained constant
        </p>
        <h1 className="font-serif text-2xl lg:text-4xl font-bold mb-2">
          Two Leaps, One Russia
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A century-long struggle for industrial power through radically different paths
        </p>
      </div>
    </section>
  );
}
