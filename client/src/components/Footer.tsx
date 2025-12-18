import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Two Leaps, One Russia</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A comparative historical analysis of Imperial Russian and Soviet 
              industrialization strategies, methods, and outcomes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/timeline">
                  <span className="hover:text-foreground cursor-pointer">Timeline</span>
                </Link>
              </li>
              <li>
                <Link href="/comparison">
                  <span className="hover:text-foreground cursor-pointer">Comparison</span>
                </Link>
              </li>
              <li>
                <Link href="/price-of-progress">
                  <span className="hover:text-foreground cursor-pointer">Price of Progress</span>
                </Link>
              </li>
              <li>
                <Link href="/presentations">
                  <span className="hover:text-foreground cursor-pointer">Presentations</span>
                </Link>
              </li>
              <li>
                <Link href="/sources">
                  <span className="hover:text-foreground cursor-pointer">Sources</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Historical Period</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Imperial Era: 1830s - 1913</li>
              <li>Soviet Era: 1928 - 1941</li>
            </ul>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>Historical Research Project</p>
        </div>
      </div>
    </footer>
  );
}
