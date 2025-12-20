import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/home";
import TimelinePage from "./pages/timeline-page";
import ComparisonPage from "./pages/comparison-page";
import PriceOfProgressPage from "./pages/price-of-progress-page";
import PresentationsPage from "./pages/presentations-page";
import SourcesPage from "./pages/sources-page";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/timeline" component={TimelinePage} />
      <Route path="/comparison" component={ComparisonPage} />
      <Route path="/price-of-progress" component={PriceOfProgressPage} />
      <Route path="/presentations" component={PresentationsPage} />
      <Route path="/sources" component={SourcesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
