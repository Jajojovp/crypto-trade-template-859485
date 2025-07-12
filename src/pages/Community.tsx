
import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Community = () => {
  const communityEvents = [
    {
      title: "🌱 Inducción: Tu Primer Tarro QR",
      date: "15 de Julio, 2024",
      location: "Centro Comunitario Villa Verde",
      participants: 25,
      description: "Aprende a usar tu tarro compostador con QR y conoce el proceso de retiro inteligente."
    },
    {
      title: "🌿 Feria de Recompensas Verdes",
      date: "22 de Julio, 2024", 
      location: "Plaza del Barrio",
      participants: 18,
      description: "Canjea tus puntos verdes por compost, semillas y productos locales."
    },
    {
      title: "🚛 Día de Retiro Especial",
      date: "29 de Julio, 2024",
      location: "Sector Villa Sustentable",
      participants: 42,
      description: "Jornada especial de retiro de tarros y entrega de compost comunitario."
    }
  ];

  const forumTopics = [
    {
      title: "🤔 ¿Qué NO debo poner en mi tarro QR?",
      author: "María González",
      replies: 12,
      lastActivity: "hace 2 horas"
    },
    {
      title: "💚 ¿Cómo maximizo mis puntos verdes?",
      author: "Carlos Silva",
      replies: 8,
      lastActivity: "hace 5 horas"
    },
    {
      title: "🏆 ¡Mi primera recompensa de compost!",
      author: "Ana López",
      replies: 15,
      lastActivity: "hace 1 día"
    }
  ];

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
            🤝 Nuestra Red de Compostadores Inteligentes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Únete a miles de familias que ya transforman sus residuos en valor comunitario. 
            Comparte tu historia, aprende de otros y celebra cada kilo de residuo recuperado.
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="button-gradient">
              Iniciar Ahora
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Community Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Eventos Comunitarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.participants} participantes
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{event.description}</p>
                    <Button size="sm">
                      Participar
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Forum */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Foro de Discusión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {forumTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{topic.title}</h4>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Por {topic.author}</span>
                      <span>{topic.replies} respuestas</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{topic.lastActivity}</p>
                  </motion.div>
                ))}
                
                <Button className="w-full">
                  Ver Todos los Temas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
