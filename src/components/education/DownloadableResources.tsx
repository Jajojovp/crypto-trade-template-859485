
import { motion } from "framer-motion";
import { Download, FileText, Image, BookOpen, PrinterIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DownloadableResources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Guía PDF: Manual Completo de Compostaje",
      description: "Manual detallado de 24 páginas con todo lo que necesitas saber sobre compostaje domiciliario.",
      size: "2.3 MB",
      downloads: "8.2k",
      type: "PDF",
      category: "Guías"
    },
    {
      icon: Image,
      title: "Infografía: Qué Compostar y Qué No",
      description: "Póster visual colorido para imprimir y colgar en tu cocina como referencia rápida.",
      size: "1.8 MB",
      downloads: "12.5k",
      type: "PNG",
      category: "Infografías"
    },
    {
      icon: BookOpen,
      title: "Calendario de Mantenimiento del Compost",
      description: "Calendario mensual imprimible para rastrear tu rutina de compostaje y volteo.",
      size: "0.9 MB",
      downloads: "5.7k",
      type: "PDF",
      category: "Herramientas"
    },
    {
      icon: PrinterIcon,
      title: "Etiquetas para Contenedores de Compost",
      description: "Etiquetas imprimibles para organizar y marcar tus contenedores de materiales.",
      size: "0.5 MB",
      downloads: "3.4k",
      type: "PDF",
      category: "Herramientas"
    },
    {
      icon: FileText,
      title: "Registro de Progreso del Compost",
      description: "Plantilla para llevar un registro detallado de tu producción y calidad de compost.",
      size: "0.7 MB",
      downloads: "4.1k",
      type: "PDF",
      category: "Herramientas"
    },
    {
      icon: Image,
      title: "Planos: Construcción de Compostador DIY",
      description: "Planos técnicos detallados para construir tu propio compostador con materiales reciclados.",
      size: "3.1 MB",
      downloads: "6.8k",
      type: "PDF",
      category: "Construcción"
    }
  ];

  const categories = ["Todos", "Guías", "Infografías", "Herramientas", "Construcción"];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF": return "bg-red-100 text-red-800";
      case "PNG": return "bg-blue-100 text-blue-800";
      case "JPG": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="recursos-descargables" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Recursos Descargables Gratuitos
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Descarga guías, infografías, plantillas y herramientas prácticas para 
          optimizar tu experiencia de compostaje domiciliario y educación ambiental.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow group h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{resource.size}</span>
                  <span>{resource.downloads} descargas</span>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Gratis
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Educational Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-blue-50 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          💡 Consejos para Usar estos Recursos
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="space-y-2">
            <h4 className="font-semibold text-blue-900">Para Principiantes</h4>
            <p className="text-sm text-blue-800">
              Comienza con la guía PDF completa y las infografías para tu cocina.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-blue-900">Para Construcción DIY</h4>
            <p className="text-sm text-blue-800">
              Descarga los planos y etiquetas antes de empezar tu proyecto.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-blue-900">Para Seguimiento</h4>
            <p className="text-sm text-blue-800">
              Usa el calendario y registro para mantener un compostaje exitoso.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadableResources;
