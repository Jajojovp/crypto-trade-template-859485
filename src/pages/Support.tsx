
import { motion } from "framer-motion";
import { HelpCircle, Phone, Mail, MessageCircle, Book } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Support = () => {
  const faqs = [
    {
      question: "🥬 ¿Qué puedo depositar en mi tarro QR?",
      answer: "Deposita restos de frutas y verduras, cáscaras de huevo, café molido, té, restos de jardín. Evita carnes, lácteos, aceites y materiales no orgánicos. ¡Nosotros nos encargamos del compostaje!"
    },
    {
      question: "🚛 ¿Cómo programo el retiro de mi tarro?",
      answer: "Escanea el QR cuando tu tarro esté lleno o usa nuestra app para programar el retiro. Nuestro equipo pasará en 24-48 horas y lo reemplazará por uno limpio."
    },
    {
      question: "⏰ ¿Cuándo recibo mi recompensa?",
      answer: "Dependiendo de tu plan, recibes compost o descuentos cada 1-3 meses. El compostaje ocurre en nuestra planta comunitaria y te notificamos cuando esté listo para retirar."
    },
    {
      question: "💚 ¿Cómo funcionan los puntos verdes?",
      answer: "Ganas puntos por cada retiro exitoso y por la calidad de tus residuos. Canjéalos por compost extra, semillas, descuentos en productos locales o talleres especiales en tu dashboard."
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Soporte Telefónico",
      description: "Lunes a Viernes 9:00 - 18:00",
      contact: "+56 2 1234 5678",
      action: "Llamar Ahora"
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      description: "Respuesta en 24 horas",
      contact: "soporte@compostajeinteligente.cl",
      action: "Enviar Email"
    },
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      description: "Lunes a Sábado 10:00 - 20:00",
      contact: "Disponible en la web",
      action: "Iniciar Chat"
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
            💬 Tu Soporte de Compostaje Inteligente
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            ¿Dudas sobre tu tarro QR, retiros o recompensas? Nuestro equipo te acompaña 
            en cada paso de tu transformación hacia un hogar cero residuos.
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="button-gradient">
              Iniciar Ahora
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Support Channels */}
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-2">{channel.description}</p>
                  <p className="font-semibold text-foreground mb-4">{channel.contact}</p>
                  <Button>
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
              Preguntas Frecuentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border rounded-lg bg-white shadow-sm"
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                    <Book className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
