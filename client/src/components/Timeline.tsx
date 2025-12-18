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
    title: "Первая русская железная дорога",
    summary: "Железная дорога Царского села связывает Санкт-Петербург с имперской резиденцией.",
    details: "Первая русская железная дорога положила начало развитию железнодорожного транспорта, хотя служила в основном для имперского удобства, а не для промышленных нужд.",
  },
  {
    id: 2,
    year: 1861,
    era: "imperial",
    title: "Освобождение крестьян",
    summary: "Александр II освобождает 23 миллиона крепостных, создавая потенциальную рабочую силу.",
    details: "Хотя освобождение имело целью модернизировать Россию, многие крестьяне остались в долгах и привязаны к земле, ограничивая мобильность рабочей силы.",
  },
  {
    id: 3,
    year: 1891,
    era: "imperial",
    title: "Начало строительства Транссиба",
    summary: "Строительство самой длинной железной дороги в мире, протяженностью 9 289 км.",
    details: "Финансируемый иностранными инвестициями и государственными облигациями, этот огромный проект символизировал имперские амбиции, но истощал казну.",
  },
  {
    id: 4,
    year: 1905,
    era: "imperial",
    title: "Революция и реформы",
    summary: "Первая русская революция вынуждает концессии, включая парламент Думу.",
    details: "Рабочее восстание и военное поражение от Японии показали неудачи быстрой, но неравномерной индустриализации при царизме.",
  },
  {
    id: 5,
    year: 1928,
    era: "soviet",
    title: "Первый пятилетний план",
    summary: "Сталин запускает принудительную индустриализацию с амбициозными плановыми целями.",
    details: "Отвергнув рыночные механизмы, государство устанавливало производственные квоты, приоритизируя тяжелую промышленность над товарами потребления.",
  },
  {
    id: 6,
    year: 1932,
    era: "soviet",
    title: "Голодомор",
    summary: "Коллективизация вызывает катастрофический голод, унесший миллионы жизней на Украине.",
    details: "Сельскохозяйственная коллективизация финансировала индустриализацию путем экспорта зерна, в результате чего произошел массовый голод.",
  },
  {
    id: 7,
    year: 1936,
    era: "soviet",
    title: "Второй пятилетний план завершен",
    summary: "Советский промышленный выпуск увеличивается в четыре раза огромной ценой.",
    details: "Система Гулага обеспечивала принудительный труд для крупных строительных проектов, а чистки террора устраняли предполагаемую оппозицию.",
  },
  {
    id: 8,
    year: 1941,
    era: "soviet",
    title: "Проверка промышленной мощи",
    summary: "Нацистское вторжение доказывает способность советской промышленности к полной войне.",
    details: "Перемещенные на восток от Урала заводы производили оружие беспрецедентными темпами, подтверждая стратегический фокус на тяжелую промышленность.",
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
            Хронология индустриализации
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif">
            Ключевые события от имперских железных дорог до советских пятилетних планов, 
            прослеживая путь России к промышленной мощи.
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
