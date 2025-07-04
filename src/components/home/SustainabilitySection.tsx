
import { motion } from "framer-motion";
import { Leaf, Home, Users, Recycle } from "lucide-react";

const principles = [
  {
    icon: Recycle,
    title: "Implementación de Bajo Costo",
    description: "Utilizamos materiales reciclados como pallets, baldes y contenedores reutilizados para construir compostadores caseros accesibles.",
    tips: [
      "Compostadores de pallets reciclados",
      "Baldes perforados para apartamentos",
      "Contenedores de plástico reutilizados",
      "Mallas y alambre de desechos"
    ]
  },
  {
    icon: Users,
    title: "Colaboración Vecinal",
    description: "Fomentamos la cooperación entre vecinos para compartir recursos, conocimientos y resultados del compostaje comunitario.",
    tips: [
      "Compostadores compartidos entre casas",
      "Días de recolección colaborativa",
      "Intercambio de abono entre vecinos",
      "Talleres vecinales gratuitos"
    ]
  },
  {
    icon: Home,
    title: "Soluciones Adaptables",
    description: "Diseñamos sistemas que se adaptan a diferentes espacios: patios, balcones, jardines comunitarios y espacios reducidos.",
    tips: [
      "Mini-compostadores para balcones",
      "Sistemas rotativos para patios",
      "Compostaje en macetas grandes",
      "Lombricompostaje en espacios pequeños"
    ]
  },
  {
    icon: Leaf,
    title: "Educación Práctica",
    description: "Proporcionamos materiales educativos descargables, videos caseros y guías impresas para líderes comunitarios.",
    tips: [
      "Guías PDF descargables gratuitas",
      "Videos tutorial con materiales caseros",
      "Infografías para compartir",
      "Material imprimible para talleres"
    ]
  }
];

const SustainabilitySection = () => {
  return (
    <section className="container px-4 py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sostenibilidad y Accesibilidad
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nuestro enfoque prioriza soluciones de bajo costo, materiales reciclados y 
          colaboración comunitaria para hacer el compostaje accesible a todos.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 text-green-600 p-3 rounded-lg flex-shrink-0">
                <principle.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {principle.tips.map((tip, tipIndex) => (
                <div key={tipIndex} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SustainabilitySection;
