import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, BookOpen, FileText, Archive, ExternalLink } from "lucide-react";

// todo: remove mock functionality
const sources = [
  {
    id: 1,
    type: "book",
    title: "The Industrialization of Russia",
    author: "Margaret Miller",
    year: 1926,
    era: "imperial",
    description: "Classic analysis of Tsarist economic policy and industrial development.",
  },
  {
    id: 2,
    type: "book",
    title: "The Soviet Industrialization Debate, 1924-1928",
    author: "Alexander Erlich",
    year: 1960,
    era: "soviet",
    description: "Examines the economic controversies preceding the Five-Year Plans.",
  },
  {
    id: 3,
    type: "article",
    title: "Sergei Witte and the Industrialization of Russia",
    author: "Theodore Von Laue",
    year: 1963,
    era: "imperial",
    description: "Biography of the key architect of late imperial industrial policy.",
  },
  {
    id: 4,
    type: "archive",
    title: "State Planning Committee Records",
    author: "Gosplan Archive",
    year: 1928,
    era: "soviet",
    description: "Primary source documents from Soviet central planning apparatus.",
  },
  {
    id: 5,
    type: "book",
    title: "Economic Development in the USSR",
    author: "Maurice Dobb",
    year: 1966,
    era: "soviet",
    description: "Comprehensive economic history from revolution to post-war period.",
  },
  {
    id: 6,
    type: "book",
    title: "Russia: A Modern History",
    author: "Paul Bushkovitch",
    year: 2012,
    era: "mixed",
    description: "Recent synthesis covering both imperial and Soviet periods.",
  },
  {
    id: 7,
    type: "article",
    title: "The Economics of Collectivization",
    author: "R.W. Davies",
    year: 1980,
    era: "soviet",
    description: "Analysis of agricultural policy and its role in funding industrialization.",
  },
  {
    id: 8,
    type: "archive",
    title: "Ministry of Finance Reports 1890-1914",
    author: "Imperial Russian Archive",
    year: 1914,
    era: "imperial",
    description: "Official statistics and policy documents from the imperial treasury.",
  },
];

const typeIcons = {
  book: BookOpen,
  article: FileText,
  archive: Archive,
};

export function SourcesCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [eraFilter, setEraFilter] = useState("all");

  const filteredSources = sources.filter((source) => {
    const matchesSearch =
      source.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || source.type === typeFilter;
    const matchesEra = eraFilter === "all" || source.era === eraFilter;
    return matchesSearch && matchesType && matchesEra;
  });

  return (
    <section className="py-16 lg:py-24" data-testid="section-sources">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Источники и библиография
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-serif">
            Первичные и вторичные источники, используемые в этом историческом анализе, 
            организованные по типам и периодам.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Поиск источников..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-source-search"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-40" data-testid="select-type-filter">
              <SelectValue placeholder="Тип" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="book">Книги</SelectItem>
              <SelectItem value="article">Статьи</SelectItem>
              <SelectItem value="archive">Архивы</SelectItem>
            </SelectContent>
          </Select>
          <Select value={eraFilter} onValueChange={setEraFilter}>
            <SelectTrigger className="w-full sm:w-40" data-testid="select-era-filter">
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все периоды</SelectItem>
              <SelectItem value="imperial">Империя</SelectItem>
              <SelectItem value="soviet">СССР</SelectItem>
              <SelectItem value="mixed">Оба</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filteredSources.map((source) => {
            const IconComponent = typeIcons[source.type as keyof typeof typeIcons];
            return (
              <Card key={source.id} data-testid={`source-card-${source.id}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-muted flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <Badge variant="outline" className="text-xs capitalize">
                          {source.type}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            source.era === "imperial"
                              ? "border-amber-600/50 text-amber-700 dark:text-amber-400"
                              : source.era === "soviet"
                              ? "border-red-600/50 text-red-700 dark:text-red-400"
                              : ""
                          }`}
                        >
                          {source.era === "mixed" ? "Both Eras" : source.era}
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-serif line-clamp-2">
                        {source.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {source.author}, {source.year}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {source.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredSources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-serif">Источников, соответствующих вашим фильтрам, не найдено.</p>
          </div>
        )}
      </div>
    </section>
  );
}
