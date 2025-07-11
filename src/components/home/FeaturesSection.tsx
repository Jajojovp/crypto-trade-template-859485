
import { motion } from "framer-motion";
import { QrCode, Smartphone, BarChart, Award, Users, Building } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Tarros con códigos QR únicos",
    description: "Cada tarro compostador incluye un código QR personalizado para solicitar retiros y seguimiento de participación.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Smartphone,
    title: "App móvil inteligente",
    description: "Escanea tu QR, programa retiros, consulta tu impacto ambiental y gestiona tus recompensas desde tu teléfono.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: BarChart,
    title: "Seguimiento de participación",
    description: "Visualiza cuántos kilos has aportado, tu impacto en CO₂ evitado y el progreso de tu comunidad.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Award,
    title: "Puntos verdes automáticos",
    description: "Gana puntos por cada retiro realizado y canjéalos por compost, semillas, descuentos en alimentos locales.",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Users,
    title: "Comunidad participativa",
    description: "Conecta con otros participantes, comparte experiencias y participa en proyectos vecinales de sostenibilidad.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Building,
    title: "Reporte de impacto en la app",
    description: "Accede a estadísticas detalladas de tu contribución ambiental y el impacto colectivo de tu comunidad.",
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
          📱 Tecnología QR Inteligente
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sistema completo de gestión con códigos QR, app móvil y seguimiento en tiempo real 
          para facilitar tu participación en la economía circular.
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
