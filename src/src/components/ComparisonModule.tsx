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
      title: "Иностранные инвестиции и облигации",
      points: [
        "Сильная зависимость от французского и бельгийского капитала",
        "Государственные гарантии по железнодорожным облигациям",
        "Принятие золотого стандарта (1897)",
        "Торговый профицит от экспорта зерна",
      ],
    },
    soviet: {
      title: "Принудительное изъятие",
      points: [
        "Коллективизация сельского хозяйства",
        "Экспорт зерна во время голода",
        "Подавление потребительских товаров",
        "Система принудительного труда Гулага",
      ],
    },
  },
  methods: {
    imperial: {
      title: "Государственный капитализм",
      points: [
        "Частные предприятия с государственными контрактами",
        "Защитные тарифы для промышленности",
        "Технические школы и иностранные эксперты",
        "Постепенное расширение инфраструктуры",
      ],
    },
    soviet: {
      title: "Командная экономика",
      points: [
        "Центральное планирование (Госплан)",
        "Обязательные производственные квоты",
        "Национализированная промышленность",
        "Быстрая принудительная коллективизация",
      ],
    },
  },
  outcomes: {
    imperial: {
      title: "Неравномерное развитие",
      points: [
        "5-я по величине промышленная экономика в мире к 1913 г.",
        "Сеть железных дорог расширена в 10 раз",
        "Постоянная отсталость сельского хозяйства",
        "Социальная нестабильность и революция",
      ],
    },
    soviet: {
      title: "Военно-промышленная мощь",
      points: [
        "Промышленный выпуск увеличен в четыре раза (1928–1940)",
        "Самодостаточность в тяжелой промышленности",
        "Способность вести полную войну",
        "Миллионы погибших от голода и чисток",
      ],
    },
  },
  goals: {
    imperial: {
      title: "Догнать Европу",
      points: [
        "Сохранение статуса великой державы",
        "Военная модернизация",
        "Интеграция в мировую экономику",
        "Сохранение автократического порядка",
      ],
    },
    soviet: {
      title: "Построить социализм",
      points: [
        "Преодолеть капиталистическое окружение",
        "Создать рабочее государство",
        "Достичь экономической автаркии",
        "Подготовиться к неизбежной войне",
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
            Сравнительный анализ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif">
            Два радикально различных подхода к одной стратегической цели: 
            превращение аграрной империи в промышленную державу.
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
                <span className="hidden sm:inline text-xs">{cat.label === "Funding" ? "Финансы" : cat.label === "Methods" ? "Методы" : cat.label === "Outcomes" ? "Результаты" : "Цели"}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key}>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-amber-600/30 dark:border-amber-500/30 shadow-md hover-elevate">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-amber-100 dark:bg-amber-900/30">
                        <Factory className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 border-amber-600/50 text-amber-700 dark:text-amber-400 font-serif text-xs">
                          Империя
                        </Badge>
                        <CardTitle className="text-xl font-serif italic">
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
                            <span className="text-muted-foreground font-serif">{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-700 dark:border-red-600 bg-black/50 dark:bg-black/70 shadow-md hover-elevate">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-red-900 dark:bg-red-950">
                        <Hammer className="w-5 h-5 text-red-300 dark:text-red-200" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 border-red-600 text-red-300 dark:text-red-200 font-sans font-bold text-xs uppercase tracking-wider">
                          СССР
                        </Badge>
                        <CardTitle className="text-xl font-sans uppercase font-bold tracking-wide text-red-100 dark:text-red-200">
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
                            <span className="text-red-100 dark:text-red-200 font-sans font-light">{point}</span>
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
