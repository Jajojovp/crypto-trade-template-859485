import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Básico",
    price: "5.000",
    frequency: "1 vez al mes",
    description: "Perfecto para familias pequeñas",
    features: [
      "Tarro con QR incluido",
      "1 retiro mensual",
      "Compostaje comunitario",
      "Recompensas (compost o descuento)",
      "Soporte y seguimiento"
    ],
    popular: false,
    color: "border-green-200"
  },
  {
    name: "Regular",
    price: "7.000",
    frequency: "2 veces al mes",
    description: "Ideal para familias activas",
    features: [
      "Tarro con QR incluido",
      "2 retiros mensuales",
      "Compostaje comunitario",
      "Recompensas premium",
      "Soporte prioritario",
      "Acceso a puntos verdes"
    ],
    popular: true,
    color: "border-green-500"
  },
  {
    name: "Intensivo",
    price: "10.000",
    frequency: "4 veces al mes",
    description: "Para familias grandes o restaurantes",
    features: [
      "Tarro con QR incluido",
      "4 retiros mensuales",
      "Compostaje premium",
      "Recompensas exclusivas",
      "Soporte 24/7",
      "Puntos verdes duplicados",
      "Descuentos especiales"
    ],
    popular: false,
    color: "border-green-200"
  }
];

const PricingPlansSection = () => {
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
          💰 Plan de Suscripción Mensual
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Elige el plan que mejor se adapte a tu familia. Todos incluyen entrega del tarro QR, 
          retiro programado, compostaje profesional y recompensas.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 shadow-lg hover:shadow-xl transition-shadow`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Más Popular
                </div>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-green-600">${plan.price}</span>
                <span className="text-gray-600 ml-2">CLP/mes</span>
              </div>
              <p className="text-sm text-gray-500">{plan.frequency}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'}`}
              asChild
            >
              <Link to="/contacto">
                Elegir Plan {plan.name}
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-sm text-gray-500">
          * En sectores rurales más aislados se puede aplicar un recargo de $1.000–$2.000 adicionales
        </p>
      </motion.div>
    </section>
  );
};

export default PricingPlansSection;