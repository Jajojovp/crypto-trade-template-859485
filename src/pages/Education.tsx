
import { motion } from "framer-motion";
import { Book, Video, Download, Leaf, Home, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CompostGuide from "@/components/education/CompostGuide";
import VideoTutorials from "@/components/education/VideoTutorials";
import DownloadableResources from "@/components/education/DownloadableResources";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🌱 Aprende el Arte del Compostaje Inteligente
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubre cómo convertirte en un maestro del compostaje con servicio de retiro. 
            Desde qué depositar en tu tarro QR hasta cómo maximizar tus recompensas verdes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <Book className="mr-2 w-5 h-5" />
              Guías Completas
            </Button>
            <Button size="lg" variant="outline">
              <Video className="mr-2 w-5 h-5" />
              Video Tutoriales
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 w-5 h-5" />
              Recursos Descargables
            </Button>
            <Button size="lg" className="button-gradient">
              Iniciar Ahora
            </Button>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-20">
          <CompostGuide />
          <VideoTutorials />
          <DownloadableResources />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Education;
