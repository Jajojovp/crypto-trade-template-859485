
import { motion } from "framer-motion";
import { ArrowRight, QrCode, Sprout, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CommunityStatsSection from "@/components/home/CommunityStatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <HeroSection />
      
      <FeaturesSection />
      
      <ProcessSection />
      
      <BenefitsSection />
      
      <CommunityStatsSection />
      
      <SustainabilitySection />
      
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="container px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-600 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Comenzar tu Compostaje Domiciliario Inteligente?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Únete a miles de familias que ya están transformando sus residuos orgánicos en abono natural y ganando puntos verdes reciclaje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
                <Link to="/contacto">
                  <QrCode className="mr-2 w-5 h-5" />
                  Escanear mi Código QR
                </Link>
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300" asChild>
                <Link to="/educacion" className="flex items-center">
                  Aprender Más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
