
import { motion } from "framer-motion";
import { QrCode, Sprout, Award, Users } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Recibe tu Compostador",
    description: "Tu asociación vecinal te entrega un compostador casero con código QR único y materiales educativos.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Sprout,
    number: "02", 
    title: "Comienza a Compostar",
    description: "Deposita tus residuos orgánicos siguiendo nuestras guías y escanea el QR semanalmente para registrar tu progreso.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: Award,
    number: "03",
    title: "Gana Puntos Verdes",
    description: "Acumula puntos verdes reciclaje por cada registro, lectura educativa y participación en actividades comunitarias.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Users,
    number: "04",
    title: "Impacta tu Comunidad", 
    description: "Usa tu abono natural, comparte conocimientos y ayuda a expandir la red de compostaje en tu vecindario.",
    color: "from-purple-400 to-purple-600"
  }
];

const ProcessSection = () => {
  return (
    <section className="container px-4 py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Cómo Funciona el Compostaje Domiciliario Inteligente?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sigue estos sencillos pasos para transformar tus residuos orgánicos en abono natural 
          y ser parte activa de la educación ambiental vecinal.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 transform -translate-y-1/2 z-10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
