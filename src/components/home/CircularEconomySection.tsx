import { motion } from "framer-motion";
import { ArrowRight, Recycle } from "lucide-react";

const steps = [
  { title: "Residuo", icon: "🗑️", description: "Restos orgánicos de tu cocina" },
  { title: "Tarro QR", icon: "📦", description: "Depositas en tu tarro inteligente" },
  { title: "Recolección", icon: "🚛", description: "Retiramos de tu domicilio" },
  { title: "Compostaje", icon: "🌱", description: "Procesamos en planta comunitaria" },
  { title: "Compost o Descuento", icon: "🎁", description: "Recibes tu recompensa" },
  { title: "Usuario/Familia", icon: "👨‍👩‍👧‍👦", description: "Mejoras tu jardín o ahorras dinero" }
];

const CircularEconomySection = () => {
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
          🔄 Economía Circular Comunitaria
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Cerramos el ciclo de los nutrientes: desde tu cocina hasta tu jardín, 
          pasando por un proceso profesional de compostaje comunitario.
        </p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full text-center"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </motion.div>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:flex items-center justify-center mt-4"
                >
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        {/* Central circular icon for the circular economy concept */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="bg-green-600 rounded-full p-6 shadow-2xl">
            <Recycle className="w-12 h-12 text-white" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg font-medium text-green-800">
            ♻️ Ciclo cerrado, impacto positivo, comunidad fortalecida
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CircularEconomySection;