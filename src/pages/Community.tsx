
import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Community = () => {
  const communityEvents = [
    {
      title: "Taller de Compostaje Básico",
      date: "15 de Julio, 2024",
      location: "Centro Comunitario Villa Verde",
      participants: 25,
      description: "Aprende los fundamentos del compostaje domiciliario con materiales reciclados."
    },
    {
      title: "Intercambio de Semillas",
      date: "22 de Julio, 2024", 
      location: "Plaza del Barrio",
      participants: 18,
      description: "Comparte e intercambia semillas orgánicas con otros vecinos."
    },
    {
      title: "Limpieza Comunitaria",
      date: "29 de Julio, 2024",
      location: "Parque Municipal",
      participants: 42,
      description: "Jornada de limpieza y clasificación de residuos orgánicos."
    }
  ];

  const forumTopics = [
    {
      title: "¿Cómo equilibrar materiales verdes y marrones?",
      author: "María González",
      replies: 12,
      lastActivity: "hace 2 horas"
    },
    {
      title: "Mi compost huele mal, ¿qué hago?",
      author: "Carlos Silva",
      replies: 8,
      lastActivity: "hace 5 horas"
    },
    {
      title: "Compartiendo mi cosecha de compost",
      author: "Ana López",
      replies: 15,
      lastActivity: "hace 1 día"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
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
            Comunidad de Compostaje
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conecta con otros vecinos comprometidos con el compostaje domiciliario. 
            Comparte experiencias, aprende juntos y construye una comunidad más sostenible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Community Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
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
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
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
                <MessageSquare className="w-5 h-5 text-pink-600" />
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
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
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
