
import { motion } from "framer-motion";
import { Users, Recycle, Sprout, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "2,547",
    label: "Familias Participando",
    description: "Hogares activos en compostaje domiciliario"
  },
  {
    icon: Recycle,
    number: "45.2",
    label: "Toneladas Desviadas",
    description: "De basura orgánica del relleno sanitario"
  },
  {
    icon: Sprout,
    number: "15.8",
    label: "Toneladas de Compost",
    description: "Abono natural producido por la comunidad"
  },
  {
    icon: Award,
    number: "184,500",
    label: "Puntos Verdes Otorgados",
    description: "Puntos canjeados por premios ecológicos"
  }
];

const CommunityStatsSection = () => {
  return (
    <section className="container px-4 py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl mx-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Impacto de Nuestra Red de Compostaje
        </h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto">
          Estos números reflejan el compromiso de nuestra comunidad con la educación ambiental vecinal 
          y el manejo sostenible de residuos orgánicos.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-10 h-10" />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm opacity-80">
                {stat.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommunityStatsSection;
