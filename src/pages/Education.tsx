
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="container px-4 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Educación Ambiental Vecinal
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Aprende todo sobre compostaje domiciliario inteligente, desde conceptos básicos hasta 
            técnicas avanzadas para maximizar tu producción de abono natural.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Book className="mr-2 w-5 h-5" />
              Guías Completas
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">
              <Video className="mr-2 w-5 h-5" />
              Video Tutoriales
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">
              <Download className="mr-2 w-5 h-5" />
              Recursos Descargables
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
