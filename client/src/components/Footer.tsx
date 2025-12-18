import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Два прыжка, одна Россия</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-serif">
              Сравнительное историческое исследование стратегий, методов и результатов 
              имперской российской и советской индустриализации.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-serif">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-serif">
              <li>
                <Link href="/timeline">
                  <span className="hover:text-foreground cursor-pointer">Хронология</span>
                </Link>
              </li>
              <li>
                <Link href="/comparison">
                  <span className="hover:text-foreground cursor-pointer">Сравнение</span>
                </Link>
              </li>
              <li>
                <Link href="/price-of-progress">
                  <span className="hover:text-foreground cursor-pointer">Цена прогресса</span>
                </Link>
              </li>
              <li>
                <Link href="/presentations">
                  <span className="hover:text-foreground cursor-pointer">Анализ</span>
                </Link>
              </li>
              <li>
                <Link href="/sources">
                  <span className="hover:text-foreground cursor-pointer">Источники</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-serif">Исторические периоды</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-serif">
              <li>Имперская эра: 1830-е – 1913 г.</li>
              <li>Советская эра: 1928–1941 г.</li>
            </ul>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="text-center text-sm text-muted-foreground font-serif">
          <p>Исторический исследовательский проект</p>
        </div>
      </div>
    </footer>
  );
}
