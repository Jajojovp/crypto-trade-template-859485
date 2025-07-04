
import { motion } from "framer-motion";
import { QrCode, Award, Book, Users, BarChart, Recycle } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Seguimiento con Código QR",
    description: "Cada compostador incluye un código QR único para registrar tu progreso semanal y ganar puntos verdes automáticamente.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Award,
    title: "Sistema de Puntos Verdes",
    description: "Gana puntos por cada actividad de compostaje y canjéalos por semillas, herramientas de jardín y premios ecológicos.",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Book,
    title: "Educación Ambiental Vecinal",
    description: "Accede a guías completas, videos educativos y consejos semanales para optimizar tu compostaje domiciliario.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Users,
    title: "Compostaje Comunitario",
    description: "Conecta con tus vecinos, comparte experiencias y participa en proyectos de compostaje colaborativo.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: BarChart,
    title: "Medición de Impacto",
    description: "Visualiza en tiempo real cuánta basura orgánica has desviado del relleno sanitario y cuánto abono has producido.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Recycle,
    title: "Soporte Remoto",
    description: "Recibe asistencia personalizada, alertas de mantenimiento y consejos específicos para tu compostador.",
    color: "bg-teal-100 text-teal-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="container px-4 py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Características de Nuestra Red de Compostaje Inteligente
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre cómo nuestra plataforma transforma el manejo de residuos orgánicos en tu comunidad, 
          promoviendo la educación ambiental vecinal y la sostenibilidad.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
