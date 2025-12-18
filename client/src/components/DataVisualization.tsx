import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, Users, Skull, Factory } from "lucide-react";

// todo: remove mock functionality
const industrialOutput = [
  { year: "1860", imperial: 100, soviet: null },
  { year: "1870", imperial: 150, soviet: null },
  { year: "1880", imperial: 220, soviet: null },
  { year: "1890", imperial: 380, soviet: null },
  { year: "1900", imperial: 580, soviet: null },
  { year: "1913", imperial: 750, soviet: null },
  { year: "1928", imperial: null, soviet: 100 },
  { year: "1932", imperial: null, soviet: 180 },
  { year: "1937", imperial: null, soviet: 370 },
  { year: "1940", imperial: null, soviet: 420 },
];

const humanCost = [
  { category: "Famine Deaths", imperial: 0.5, soviet: 7 },
  { category: "Political Repression", imperial: 0.1, soviet: 1.5 },
  { category: "Forced Labor", imperial: 0.2, soviet: 2 },
  { category: "War Preparation Cost", imperial: 0.3, soviet: 1 },
];

const keyStats = [
  {
    icon: TrendingUp,
    label: "Имперский рост",
    value: "5.7%",
    description: "Среднегодовой рост промышленности 1885–1913",
    era: "imperial",
  },
  {
    icon: Factory,
    label: "Советский выпуск",
    value: "4x",
    description: "Увеличение промышленного выпуска 1928–1940",
    era: "soviet",
  },
  {
    icon: Users,
    label: "Рабочая сила",
    value: "3.5M",
    description: "Фабричных рабочих в России к 1913 г.",
    era: "imperial",
  },
  {
    icon: Skull,
    label: "Человеческие потери",
    value: "~10M",
    description: "Смерти от коллективизации и чисток",
    era: "soviet",
  },
];

export function DataVisualization() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-data">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Цена прогресса
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif">
            Количественная оценка затрат и достижений индустриализации 
            в обоих периодах через данные и статистику.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {keyStats.map((stat, idx) => (
            <Card
              key={idx}
              className={
                stat.era === "imperial"
                  ? "border-amber-600/30 dark:border-amber-500/30"
                  : "border-red-600/30 dark:border-red-500/30"
              }
              data-testid={`stat-card-${idx}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-md ${
                      stat.era === "imperial"
                        ? "bg-amber-100 dark:bg-amber-900/30"
                        : "bg-red-100 dark:bg-red-900/30"
                    }`}
                  >
                    <stat.icon
                      className={`w-5 h-5 ${
                        stat.era === "imperial"
                          ? "text-amber-700 dark:text-amber-400"
                          : "text-red-700 dark:text-red-400"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-mono text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Индекс промышленного выпуска</CardTitle>
              <CardDescription className="font-serif">
                Относительное промышленное производство (базовый год = 100)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={industrialOutput}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis
                      dataKey="year"
                      className="text-xs"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      className="text-xs"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="imperial"
                      stroke="#b45309"
                      strokeWidth={2}
                      name="Имперская Россия"
                      connectNulls={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="soviet"
                      stroke="#dc2626"
                      strokeWidth={2}
                      name="Советский Союз"
                      connectNulls={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Сравнение человеческих потерь</CardTitle>
              <CardDescription className="font-serif">
                Приблизительное число погибших в миллионах по категориям
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={humanCost} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis
                      type="number"
                      className="text-xs"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      type="category"
                      dataKey="category"
                      className="text-xs"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      width={120}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="imperial" fill="#b45309" name="Империя" />
                    <Bar dataKey="soviet" fill="#dc2626" name="СССР" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
