
import { motion } from "framer-motion";
import { Play, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideoTutorials = () => {
  const videos = [
    {
      title: "Introducción al Compostaje Domiciliario",
      duration: "8:45",
      instructor: "María González",
      description: "Conceptos básicos del compostaje, beneficios ambientales y económicos para tu hogar.",
      level: "Principiante",
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      views: "2.3k"
    },
    {
      title: "Construye tu Compostador con Materiales Reciclados",
      duration: "12:30",
      instructor: "Carlos Silva",
      description: "Tutorial paso a paso para construir un compostador usando pallets y materiales reutilizados.",
      level: "Intermedio",
      thumbnail: "https://images.unsplash.com/photo-1585074033726-ad19c0b2e3e2?w=400",
      views: "1.8k"
    },
    {
      title: "Solución de Problemas Comunes",
      duration: "6:20",
      instructor: "Ana López",
      description: "Cómo resolver malos olores, exceso de humedad y otros problemas frecuentes.",
      level: "Intermedio",
      thumbnail: "https://images.unsplash.com/photo-1574263867128-b2651ad30b6a?w=400",
      views: "3.1k"
    },
    {
      title: "Lombricompostaje: Acelera tu Producción",
      duration: "15:10",
      instructor: "Diego Ramírez",
      description: "Integra lombrices a tu sistema de compostaje para producir humus de alta calidad.",
      level: "Avanzado",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400",
      views: "1.2k"
    },
    {
      title: "Compostaje de Apartamento: Espacios Pequeños",
      duration: "9:55",
      instructor: "Sofia Mendoza",
      description: "Técnicas especiales para compostar en balcones, terrazas y espacios reducidos.",
      level: "Principiante",
      thumbnail: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=400",
      views: "4.5k"
    },
    {
      title: "Uso del Compost: De la Producción al Jardín",
      duration: "11:25",
      instructor: "Roberto Torres",
      description: "Cómo aplicar correctamente tu compost casero en plantas, huertos y jardines.",
      level: "Intermedio",
      thumbnail: "https://images.unsplash.com/photo-1416066052477-fffb36d34e42?w=400",
      views: "2.9k"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-yellow-100 text-yellow-800";
      case "Avanzado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="video-tutoriales" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Video Tutoriales Paso a Paso
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Aprende viendo a expertos en compostaje que te guían através de cada proceso, 
          desde la configuración inicial hasta la solución de problemas avanzados.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(video.level)}`}>
                    {video.level}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                  {video.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {video.instructor}
                  </div>
                  <span>{video.views} visualizaciones</span>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Tutorial
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoTutorials;
