
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Villa Nueva, Sector 5",
    avatar: "👩‍🌾",
    rating: 5,
    text: "Comenzé con el compostaje domiciliario hace 6 meses y no puedo estar más feliz. Mi jardín nunca había estado tan verde y he ganado suficientes puntos verdes para obtener todas mis semillas de temporada gratis."
  },
  {
    name: "Carlos Ramírez",
    location: "Centro Histórico",
    avatar: "👨‍🌱",
    rating: 5,
    text: "La educación ambiental vecinal que recibimos ha sido increíble. Ahora toda mi cuadra participa en el compostaje comunitario y hemos creado un hermoso jardín compartido."
  },
  {
    name: "Ana Martínez",
    location: "Barrio Los Álamos",
    avatar: "👩‍⚕️",
    rating: 5,
    text: "Como madre de dos niños, me encanta que puedan aprender sobre el cuidado del medio ambiente de forma práctica. El sistema de puntos los motiva mucho a participar."
  },
  {
    name: "Roberto Silva",
    location: "Urbanización El Sol",
    avatar: "👨‍🔧",
    rating: 5,
    text: "Construí mi compostador con materiales reciclados siguiendo las guías. Es increíble ver cómo la basura orgánica se convierte en abono natural de alta calidad."
  }
];

const TestimonialsSection = () => {
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
          Lo que Dicen Nuestros Vecinos
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Conoce las experiencias reales de familias que han transformado su manejo de residuos 
          y fortalecido su conexión con la comunidad.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{testimonial.avatar}</div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
            
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
