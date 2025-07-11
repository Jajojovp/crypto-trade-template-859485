
import { motion } from "framer-motion";
import { QrCode, Trash2, Truck, Sprout, Gift } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Recibe tu tarro compostador con QR",
    description: "Te entregamos un balde reutilizado con un código QR personalizado.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Trash2,
    number: "02", 
    title: "Deposita tus residuos orgánicos",
    description: "Sigue nuestras guías para echar solo lo permitido. Nada más.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: QrCode,
    number: "03",
    title: "Notifica cuando esté lleno",
    description: "Escanea el QR o usa nuestra app para avisar que está listo para retiro.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Truck,
    number: "04",
    title: "Nosotros lo retiramos", 
    description: "Pasamos en vehículo a buscar el tarro, lo compostamos y luego te damos dos opciones.",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: Gift,
    number: "05",
    title: "Elige tu recompensa", 
    description: "✅ Recibe compost natural para tu jardín ✅ Canjea por descuentos en frutas, verduras o semillas locales",
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
          💡 ¿Cómo funciona nuestro servicio?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Proceso simple de 5 pasos: desde recibir tu tarro hasta elegir tu recompensa. 
          Nosotros nos encargamos del compostaje profesional.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
