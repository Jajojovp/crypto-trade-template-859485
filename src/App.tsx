
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Education from "./pages/Education";
import Community from "./pages/Community";
import Support from "./pages/Support";
import Impact from "./pages/Impact";

import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard/:qrCode?" element={<Dashboard />} />
            <Route path="/educacion" element={<Education />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/soporte" element={<Support />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/impacto" element={<Impact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
