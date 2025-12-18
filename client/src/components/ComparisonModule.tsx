import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Coins,
  Building2,
  Users,
  Target,
  Globe,
  Shield,
  Factory,
  Hammer,
} from "lucide-react";

// todo: remove mock functionality
const comparisonData = {
  funding: {
    imperial: {
      title: "Foreign Investment & Bonds",
      points: [
        "Heavy reliance on French and Belgian capital",
        "State-guaranteed railway bonds",
        "Gold standard adoption (1897)",
        "Trade surplus from grain exports",
      ],
    },
    soviet: {
      title: "Forced Extraction",
      points: [
        "Collectivization of agriculture",
        "Grain exports during famine",
        "Suppressed consumer goods",
        "Gulag forced labor system",
      ],
    },
  },
  methods: {
    imperial: {
      title: "State-Guided Capitalism",
      points: [
        "Private enterprise with state contracts",
        "Protective tariffs for industry",
        "Technical schools and foreign experts",
        "Gradual infrastructure expansion",
      ],
    },
    soviet: {
      title: "Command Economy",
      points: [
        "Central planning (Gosplan)",
        "Mandatory production quotas",
        "Nationalized industry",
        "Rapid forced collectivization",
      ],
    },
  },
  outcomes: {
    imperial: {
      title: "Uneven Development",
      points: [
        "World's 5th largest industrial economy by 1913",
        "Railway network expanded 10x",
        "Persistent agricultural backwardness",
        "Social instability and revolution",
      ],
    },
    soviet: {
      title: "Military-Industrial Power",
      points: [
        "Industrial output quadrupled 1928-1940",
        "Self-sufficient in heavy industry",
        "Capable of fighting total war",
        "Millions dead from famine and purges",
      ],
    },
  },
  goals: {
    imperial: {
      title: "Catch Up to Europe",
      points: [
        "Great power status maintenance",
        "Military modernization",
        "Integration into world economy",
        "Preserve autocratic order",
      ],
    },
    soviet: {
      title: "Build Socialism",
      points: [
        "Overcome capitalist encirclement",
        "Create workers' state",
        "Achieve economic autarky",
        "Prepare for inevitable war",
      ],
    },
  },
};

const categories = [
  { key: "funding", label: "Funding", icon: Coins },
  { key: "methods", label: "Methods", icon: Building2 },
  { key: "outcomes", label: "Outcomes", icon: Target },
  { key: "goals", label: "Goals", icon: Globe },
];

export function ComparisonModule() {
  const [activeCategory, setActiveCategory] = useState("funding");

  return (
    <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-comparison">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Comparative Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two radically different approaches to the same strategic goal: 
            transforming an agrarian empire into an industrial power.
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-8">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.key}
                value={cat.key}
                className="flex items-center gap-1"
                data-testid={`tab-${cat.key}`}
              >
                <cat.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key}>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-amber-600/30 dark:border-amber-500/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-amber-100 dark:bg-amber-900/30">
                        <Factory className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 border-amber-600/50 text-amber-700 dark:text-amber-400">
                          Imperial Russia
                        </Badge>
                        <CardTitle className="text-xl font-serif">
                          {comparisonData[cat.key as keyof typeof comparisonData].imperial.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {comparisonData[cat.key as keyof typeof comparisonData].imperial.points.map(
                        (point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-600/30 dark:border-red-500/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-red-100 dark:bg-red-900/30">
                        <Hammer className="w-5 h-5 text-red-700 dark:text-red-400" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 border-red-600/50 text-red-700 dark:text-red-400">
                          Soviet Union
                        </Badge>
                        <CardTitle className="text-xl font-serif">
                          {comparisonData[cat.key as keyof typeof comparisonData].soviet.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {comparisonData[cat.key as keyof typeof comparisonData].soviet.points.map(
                        (point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
