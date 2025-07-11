
import { motion } from "framer-motion";
import { ArrowRight, QrCode, Sprout, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import PricingPlansSection from "@/components/home/PricingPlansSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CircularEconomySection from "@/components/home/CircularEconomySection";
import ParticipantsSection from "@/components/home/ParticipantsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CommunityStatsSection from "@/components/home/CommunityStatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <HeroSection />
      
      <ProcessSection />
      
      <PricingPlansSection />
      
      <BenefitsSection />
      
      <FeaturesSection />
      
      <CircularEconomySection />
      
      <ParticipantsSection />
      
      <TestimonialsSection />
      
      <CommunityStatsSection />

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
              🌎 ¡Sé parte de la transformación!
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              🪱 Únete al compostaje inteligente hoy. Transforma tus residuos orgánicos en valor para tu comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
                <Link to="/contacto">
                  <QrCode className="mr-2 w-5 h-5" />
                  Quiero Participar
                </Link>
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300" asChild>
                <Link to="/contacto" className="flex items-center">
                  Soy institución (quiero saber más)
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
