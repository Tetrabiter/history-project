import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Hammer } from "lucide-react";
import imperialImage from "../../public/images/imperial_russian_railway_construction.png";
import sovietImage from "../../public/images/soviet_constructivist_industrial_poster.png";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden" data-testid="section-hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative overflow-hidden h-screen lg:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imperialImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-amber-900/60" />
          <div className="relative z-10 flex flex-col justify-center h-full p-4 sm:p-6 lg:p-16">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200" />
              <span className="text-amber-200 font-serif text-xs sm:text-sm tracking-wide italic">
                1830-е – 1913 г.
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 italic leading-tight">
              Имперский капитализм
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-4 sm:mb-6 font-serif">
              Рыночная промышленность под государственным руководством через железные дороги, 
              текстиль и иностранные инвестиции. Быстрый рост с западной зависимостью.
            </p>
            <Link href="/comparison">
              <Button
                variant="outline"
                size="sm"
                className="w-fit bg-white/10 backdrop-blur-sm border-amber-200/30 text-white font-serif text-sm sm:text-base"
                data-testid="button-explore-imperial"
              >
                Исследовать империю
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden h-screen lg:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sovietImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-red-950/85 to-red-900/70" />
          <div className="relative z-10 flex flex-col justify-center h-full p-4 sm:p-6 lg:p-16">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <Hammer className="w-5 h-5 sm:w-6 sm:h-6 text-red-200" />
              <span className="text-red-200 font-sans text-xs sm:text-sm tracking-widest uppercase font-bold">
                1928–1941
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide leading-tight">
              Советская диктатура
            </h2>
            <p className="text-red-100/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-4 sm:mb-6 font-sans font-light">
              Принудительная государственная мобилизация, отвергающая рынки. Тяжелая промышленность 
              и военный комплекс огромной ценой. Автаркия и боевая готовность.
            </p>
            <Link href="/comparison">
              <Button
                variant="outline"
                size="sm"
                className="w-fit bg-white/10 backdrop-blur-sm border-red-200/30 text-white font-sans font-bold uppercase tracking-wide text-sm sm:text-base"
                data-testid="button-explore-soviet"
              >
                СССР
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
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
        <p className="text-muted-foreground text-sm mb-2 font-serif italic">
          Стратегическая цель осталась неизменной
        </p>
        <h1 className="font-serif text-2xl lg:text-4xl font-bold mb-2">
          Два прыжка, одна Россия
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto font-serif">
          Столетняя борьба за промышленную мощь через радикально различные пути
        </p>
      </div>
    </section>
  );
}
