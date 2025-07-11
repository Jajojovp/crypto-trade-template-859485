import { motion } from "framer-motion";
import { Users, Home, Building, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const participants = [
  {
    icon: Home,
    title: "Familias",
    description: "Hogares que quieren reducir su huella ambiental y obtener compost o descuentos en alimentos.",
    features: ["Plan mensual flexible", "Retiros programados", "Recompensas personalizadas"],
    color: "bg-green-100 border-green-200",
    iconColor: "text-green-600"
  },
  {
    icon: Users,
    title: "Juntas de vecinos",
    description: "Organizaciones vecinales que buscan implementar proyectos de sostenibilidad comunitaria.",
    features: ["Planes grupales", "Descuentos por volumen", "Proyectos comunitarios"],
    color: "bg-blue-100 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    icon: Building,
    title: "Comunas verdes",
    description: "Municipalidades interesadas en programas de gestión de residuos orgánicos y economía circular.",
    features: ["Contratos institucionales", "Compost para áreas verdes", "Indicadores de impacto"],
    color: "bg-purple-100 border-purple-200",
    iconColor: "text-purple-600"
  },
  {
    icon: GraduationCap,
    title: "Escuelas y centros educativos",
    description: "Instituciones que quieren integrar educación ambiental práctica en sus programas.",
    features: ["Programas educativos", "Kits escolares", "Talleres para profesores"],
    color: "bg-orange-100 border-orange-200",
    iconColor: "text-orange-600"
  }
];

const ParticipantsSection = () => {
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
          🤝 ¿Quiénes pueden participar?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nuestro servicio de compostaje con retiro está diseñado para diferentes tipos de participantes, 
          desde familias individuales hasta instituciones completas.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {participants.map((participant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${participant.color} rounded-2xl border-2 p-6 hover:shadow-lg transition-shadow`}
          >
            <div className="text-center mb-6">
              <div className={`w-16 h-16 ${participant.color.replace('bg-', 'bg-')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <participant.icon className={`w-8 h-8 ${participant.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {participant.title}
              </h3>
              <p className="text-gray-700 text-sm">
                {participant.description}
              </p>
            </div>
            
            <ul className="space-y-2 mb-6">
              {participant.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="outline" 
              size="sm" 
              className={`w-full ${participant.iconColor.replace('text-', 'border-')} ${participant.iconColor} hover:${participant.color.replace('bg-', 'bg-')}`}
              asChild
            >
              <Link to="/contacto">
                Más información
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Para Usuarios Finales</h4>
            <p className="text-green-700 text-sm">Planes individuales y familiares con opciones flexibles de retiro y recompensas.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Para Instituciones</h4>
            <p className="text-blue-700 text-sm">Programas especiales con venta de compost, convenios y proyectos educativos.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParticipantsSection;