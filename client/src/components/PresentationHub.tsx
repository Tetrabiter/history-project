import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  GitFork,
  Scale,
  Coins,
  Globe,
  Sword,
  BookOpen,
} from "lucide-react";

// todo: remove mock functionality
const presentations = [
  {
    id: 1,
    title: "Continuity vs. Rupture",
    icon: GitFork,
    summary: "Did the Soviets build on Tsarist foundations or start anew?",
    content: `The question of continuity versus rupture remains central to understanding Russian industrialization. While the Bolsheviks rejected the capitalist market mechanisms of the imperial era, they inherited and expanded upon key elements: the strategic focus on railways and heavy industry, the tradition of state intervention in the economy, and the goal of military-industrial self-sufficiency.

The methods, however, represented a total transformation. Imperial Russia integrated into global capital markets; the USSR pursued autarky. The Tsars relied on foreign expertise and investment; Stalin demanded indigenous development and expelled foreign capital. Most dramatically, the social contract shifted from gradual modernization within existing class structures to revolutionary transformation through violence and coercion.`,
    era: "mixed",
  },
  {
    id: 2,
    title: "The Role of the State",
    icon: Scale,
    summary: "From protectionist policies to total command economy.",
    content: `Both eras featured strong state involvement in industrialization, but the nature and extent differed fundamentally. Under Witte's reforms, the imperial state provided tariff protection, guaranteed railway bonds, and directed foreign investment toward strategic sectors while maintaining private ownership and market mechanisms.

The Soviet command economy eliminated private property in the means of production and replaced market signals with central planning through Gosplan. Production targets, resource allocation, and prices were determined administratively rather than through supply and demand. This enabled rapid forced industrialization but created systemic inefficiencies that would plague the Soviet economy throughout its existence.`,
    era: "mixed",
  },
  {
    id: 3,
    title: "Foreign Capital & Dependency",
    icon: Coins,
    summary: "From French loans to forced self-sufficiency.",
    content: `Imperial Russia's industrialization depended heavily on foreign capital, particularly from France and Belgium. By 1914, roughly a third of all industrial capital was foreign-owned, and the Russian state was the world's largest debtor. This integration into global capitalism brought technology and expertise but created dependency and vulnerability.

Stalin's industrialization explicitly rejected this model. After repudiating Tsarist debts and expelling foreign owners during the revolution, the USSR pursued autarky—economic self-sufficiency. The Five-Year Plans prioritized heavy industry precisely to end dependence on capitalist economies for machinery and armaments, even at the cost of consumer welfare.`,
    era: "mixed",
  },
  {
    id: 4,
    title: "Integration vs. Isolation",
    icon: Globe,
    summary: "Global markets or socialist fortress?",
    content: `The two industrialization models represented opposing visions of Russia's place in the world economy. Imperial Russia sought integration into the global capitalist system: joining the gold standard, attracting foreign investment, exporting grain to finance industrialization, and participating in international trade networks.

The Soviet Union, born from revolution and facing "capitalist encirclement," pursued the opposite strategy. Economic isolation was both ideological necessity and strategic choice. By building an industrial base independent of capitalist markets, the USSR aimed to survive—and eventually triumph over—its ideological enemies. This isolation protected against external economic pressure but limited access to technology and markets.`,
    era: "mixed",
  },
  {
    id: 5,
    title: "Preparing for War",
    icon: Sword,
    summary: "Military needs as driver of industrial policy.",
    content: `In both eras, military considerations profoundly shaped industrialization priorities. Imperial Russia's humiliating defeat in the Crimean War (1856) and near-defeat by Japan (1905) exposed technological backwardness and drove reform efforts. Railways were built for military mobility as much as economic development.

Soviet industrialization was even more explicitly militarized. Stalin's famous 1931 speech declared: "We are fifty or a hundred years behind the advanced countries. We must make good this distance in ten years. Either we do it, or they crush us." The First Five-Year Plan prioritized precisely those heavy industries—steel, machinery, armaments—needed for modern warfare. When Nazi Germany invaded in 1941, this industrial base proved decisive.`,
    era: "mixed",
  },
  {
    id: 6,
    title: "Historical Legacy",
    icon: BookOpen,
    summary: "Long-term consequences of each development path.",
    content: `Both industrialization models left lasting legacies that shaped Russia's trajectory. The imperial model created islands of modernity—concentrated in St. Petersburg, Moscow, and the Donbas—while leaving the vast peasant majority largely untouched. This uneven development contributed to revolutionary instability.

Soviet industrialization transformed the USSR into a superpower capable of defeating Nazi Germany and competing with the United States. But the emphasis on heavy industry over consumer goods, the destruction of private agriculture, and the legacy of terror and coercion created deep structural problems. The command economy's inefficiencies ultimately contributed to Soviet collapse in 1991, leaving Russia to once again seek a path to modernization.`,
    era: "mixed",
  },
];

export function PresentationHub() {
  const [selectedPresentation, setSelectedPresentation] = useState<typeof presentations[0] | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-presentations">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Key Questions & Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the central themes and debates surrounding Russia's 
            industrialization through structured historical analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((pres) => (
            <Card
              key={pres.id}
              className="hover-elevate cursor-pointer"
              onClick={() => setSelectedPresentation(pres)}
              data-testid={`presentation-card-${pres.id}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <pres.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">{pres.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{pres.summary}</p>
                <Button variant="ghost" size="sm" className="w-full">
                  Read Analysis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPresentation} onOpenChange={() => setSelectedPresentation(null)}>
        {selectedPresentation && (
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <selectedPresentation.icon className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="secondary">Historical Analysis</Badge>
              </div>
              <DialogTitle className="font-serif text-2xl">
                {selectedPresentation.title}
              </DialogTitle>
              <DialogDescription>{selectedPresentation.summary}</DialogDescription>
            </DialogHeader>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {selectedPresentation.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
