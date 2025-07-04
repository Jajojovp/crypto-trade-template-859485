
import { motion } from "framer-motion";
import { Leaf, Home, Heart, Recycle } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Beneficios Ambientales",
    items: [
      "Reduce hasta 30% tus residuos domésticos",
      "Evita emisiones de metano in rellenos sanitarios", 
      "Crea abono natural sin químicos",
      "Mejora la salud del suelo de tu jardín"
    ],
    color: "bg-green-600"
  },
  {
    icon: Home,
    title: "Beneficios para el Hogar",
    items: [
      "Ahorra dinero en fertilizantes comerciales",
      "Reduce la frecuencia de recolección de basura",
      "Jardín más productivo y saludable",
      "Actividad educativa para toda la familia"
    ],
    color: "bg-blue-600"
  },
  {
    icon: Heart,
    title: "Beneficios Comunitarios",
    items: [
      "Fortalece vínculos vecinales",
      "Educación ambiental compartida",
      "Proyectos de jardines comunitarios",
      "Orgullo por el impacto positivo"
    ],
    color: "bg-purple-600"
  },
  {
    icon: Recycle,
    title: "Beneficios Económicos",
    items: [
      "Puntos verdes canjeables por premios",
      "Semillas y herramientas gratuitas",
      "Talleres y capacitaciones sin costo",
      "Descuentos en productos ecológicos"
    ],
    color: "bg-emerald-600"
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
          Beneficios del Compostaje Comunitario
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre cómo el compostaje domiciliario inteligente beneficia a tu familia, 
          tu comunidad y el medio ambiente de manera integral.
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
