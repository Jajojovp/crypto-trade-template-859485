
import { motion } from "framer-motion";
import { User, Heart, Leaf, Building } from "lucide-react";

const benefits = [
  {
    icon: User,
    title: "Para ti",
    items: [
      "Ahorro en fertilizantes",
      "Participación en economía circular",
      "Reconocimiento por impacto ambiental",
      "Descuentos en alimentos locales"
    ],
    color: "bg-green-600"
  },
  {
    icon: Heart,
    title: "Para tu comunidad",
    items: [
      "Reducción de basura en vertederos",
      "Mejora de áreas verdes",
      "Apoyo a agricultores locales",
      "Fortalecimiento del tejido social"
    ],
    color: "bg-emerald-600"
  },
  {
    icon: Leaf,
    title: "Para el medio ambiente",
    items: [
      "Reduce emisiones de metano",
      "Cierra ciclos de nutrientes",
      "Mejora la salud del suelo",
      "Conserva recursos naturales"
    ],
    color: "bg-blue-600"
  },
  {
    icon: Building,
    title: "Para instituciones",
    items: [
      "Venta de compost a municipalidades",
      "Convenios con agricultores",
      "Programas educativos para colegios",
      "Proyectos de responsabilidad social"
    ],
    color: "bg-purple-600"
  }
];

const BenefitsSection = () => {
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
          🌱 ¿Qué beneficios recibes?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nuestro servicio de compostaje con retiro genera valor para todos: 
          individuos, comunidades, medio ambiente e instituciones.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`${benefit.color} p-6 text-center`}>
              <benefit.icon className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white">
                {benefit.title}
              </h3>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
