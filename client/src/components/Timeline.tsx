import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

// todo: remove mock functionality
const timelineEvents = [
  {
    id: 1,
    year: 1837,
    era: "imperial",
    title: "First Russian Railway",
    summary: "Tsarskoye Selo Railway opens, connecting St. Petersburg to the imperial residence.",
    details: "Russia's first public railway marked the beginning of railroad development, though it was primarily for imperial convenience rather than industrial transport.",
  },
  {
    id: 2,
    year: 1861,
    era: "imperial",
    title: "Emancipation of Serfs",
    summary: "Alexander II frees 23 million serfs, creating a potential industrial workforce.",
    details: "While intended to modernize Russia, the emancipation left many peasants in debt and tied to the land, limiting labor mobility for factories.",
  },
  {
    id: 3,
    year: 1891,
    era: "imperial",
    title: "Trans-Siberian Railway Begins",
    summary: "Construction starts on the world's longest railway, spanning 9,289 km.",
    details: "Funded by foreign investment and state bonds, this massive project symbolized imperial ambition but strained the treasury.",
  },
  {
    id: 4,
    year: 1905,
    era: "imperial",
    title: "Revolution and Reform",
    summary: "First Russian Revolution forces concessions, including the Duma parliament.",
    details: "Industrial unrest and military defeat in Japan exposed the failures of rapid but uneven industrialization under tsarism.",
  },
  {
    id: 5,
    year: 1928,
    era: "soviet",
    title: "First Five-Year Plan",
    summary: "Stalin launches forced industrialization with ambitious production targets.",
    details: "Rejecting market mechanisms, the state set production quotas that prioritized heavy industry over consumer goods.",
  },
  {
    id: 6,
    year: 1932,
    era: "soviet",
    title: "Holodomor Famine",
    summary: "Collectivization causes catastrophic famine killing millions in Ukraine.",
    details: "Agricultural collectivization funded industrialization by extracting grain for export, resulting in mass starvation.",
  },
  {
    id: 7,
    year: 1936,
    era: "soviet",
    title: "Second Five-Year Plan Completed",
    summary: "Soviet industrial output quadruples, but at enormous human cost.",
    details: "The Gulag system provided forced labor for major construction projects while terror purges eliminated perceived opposition.",
  },
  {
    id: 8,
    year: 1941,
    era: "soviet",
    title: "Industrial Capacity Tested",
    summary: "Nazi invasion proves Soviet industrial base capable of total war.",
    details: "The relocated factories east of the Urals produced weapons at unprecedented rates, validating the strategic focus on heavy industry.",
  },
];

interface TimelineEventProps {
  event: typeof timelineEvents[0];
  isLeft: boolean;
}

function TimelineEvent({ event, isLeft }: TimelineEventProps) {
  const [expanded, setExpanded] = useState(false);
  const isImperial = event.era === "imperial";

  return (
    <div
      className={`flex items-start gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"} mb-8`}
      data-testid={`timeline-event-${event.id}`}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <Card
          className={`cursor-pointer transition-all ${
            isImperial
              ? "border-amber-600/30 dark:border-amber-500/30"
              : "border-red-600/30 dark:border-red-500/30"
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <CardHeader className="pb-2">
            <div className={`flex items-center gap-2 ${isLeft ? "justify-end" : "justify-start"} flex-wrap`}>
              <Badge
                variant="outline"
                className={
                  isImperial
                    ? "border-amber-600/50 text-amber-700 dark:text-amber-400"
                    : "border-red-600/50 text-red-700 dark:text-red-400"
                }
              >
                {event.year}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {isImperial ? "Imperial" : "Soviet"}
              </Badge>
            </div>
            <CardTitle className="text-lg font-serif">{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">{event.summary}</p>
            {expanded && (
              <p className="text-foreground text-sm mt-3 pt-3 border-t border-border">
                {event.details}
              </p>
            )}
            <div className={`flex ${isLeft ? "justify-end" : "justify-start"} mt-2`}>
              {expanded ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            isImperial
              ? "border-amber-600 bg-amber-100 dark:bg-amber-900"
              : "border-red-600 bg-red-100 dark:bg-red-900"
          }`}
        />
        <div className="w-0.5 h-full bg-border" />
      </div>

      <div className="flex-1" />
    </div>
  );
}

export function Timeline() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-timeline">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Timeline of Industrialization
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key events from Imperial railways to Soviet Five-Year Plans, 
            tracing Russia's path to industrial power.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.id}
              event={event}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
