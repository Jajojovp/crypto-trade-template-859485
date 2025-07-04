
import { motion } from "framer-motion";
import { HelpCircle, Phone, Mail, MessageCircle, Book } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Support = () => {
  const faqs = [
    {
      question: "¿Qué materiales puedo compostar?",
      answer: "Puedes compostar restos de frutas y verduras, cáscaras de huevo, café molido, hojas secas, papel sin tinta, y restos de poda. Evita carnes, lácteos, aceites y materiales tratados químicamente."
    },
    {
      question: "¿Por qué mi compost huele mal?",
      answer: "Un mal olor indica exceso de humedad o falta de oxígeno. Agrega materiales secos como hojas o papel, y voltea el compost para oxigenarlo. También verifica que no hayas agregado materiales inadecuados."
    },
    {
      question: "¿Cuánto tiempo tarda en estar listo el compost?",
      answer: "El compost casero normalmente tarda entre 3-6 meses en estar listo, dependiendo de los materiales, la temperatura, y qué tan seguido lo voltees. Un compost bien manejado puede estar listo en 2-3 meses."
    },
    {
      question: "¿Cómo canjen mis puntos verdes?",
      answer: "Puedes canjear tus puntos verdes en la sección de recompensas de tu dashboard. Los premios incluyen semillas, herramientas de jardín, talleres gratuitos y descuentos en productos ecológicos."
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
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
            Soporte y Ayuda
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ¿Necesitas ayuda con tu compostaje domiciliario? Estamos aquí para apoyarte 
            en cada paso de tu journey hacia un hogar más sostenible.
          </p>
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
                  <div className="bg-orange-100 text-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-2">{channel.description}</p>
                  <p className="font-semibold text-gray-900 mb-4">{channel.contact}</p>
                  <Button className="bg-orange-600 hover:bg-orange-700">
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
              <HelpCircle className="w-6 h-6 text-blue-600" />
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
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-start gap-2">
                    <Book className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
