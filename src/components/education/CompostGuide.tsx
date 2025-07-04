
import { motion } from "framer-motion";
import { Leaf, Droplets, ThermometerSun, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompostGuide = () => {
  const guideSteps = [
    {
      icon: Leaf,
      title: "Materiales Correctos",
      description: "Combina materiales 'verdes' (ricos en nitrógeno) como restos de cocina, con materiales 'marrones' (ricos en carbono) como hojas secas.",
      tips: ["Restos de frutas y verduras", "Cáscaras de huevo", "Café molido", "Hojas secas", "Papel sin tinta"]
    },
    {
      icon: Droplets,
      title: "Humedad Adecuada",
      description: "El compost debe tener la humedad de una esponja escurrida. Muy seco y no se descompone, muy húmedo y huele mal.",
      tips: ["Rocía agua si está muy seco", "Agrega hojas secas si está muy húmedo", "Cubre durante lluvias intensas"]
    },
    {
      icon: ThermometerSun,
      title: "Temperatura Ideal",
      description: "Un compost activo debe estar tibio al tacto (40-60°C). La temperatura indica que los microorganismos están trabajando.",
      tips: ["Voltea si está frío", "Agrega materiales verdes para calentar", "Protege del sol directo"]
    },
    {
      icon: RotateCcw,
      title: "Oxigenación Regular",
      description: "Voltea tu compost cada 1-2 semanas para proporcionar oxígeno y acelerar la descomposición.",
      tips: ["Usa una horquilla o pala", "Mueve el material del centro hacia afuera", "Hazlo después de agregar materiales nuevos"]
    }
  ];

  const compostableItems = {
    yes: [
      "Restos de frutas y verduras",
      "Cáscaras de huevo trituradas",
      "Café molido y filtros",
      "Té y bolsitas (sin grapas)",
      "Hojas y restos de poda",
      "Papel y cartón sin tinta",
      "Estiércol de herbívoros"
    ],
    no: [
      "Carnes y pescados",
      "Productos lácteos",
      "Aceites y grasas",
      "Excrementos de mascotas",
      "Plantas enfermas",
      "Cenizas de carbón",
      "Materiales tratados químicamente"
    ]
  };

  return (
    <section id="guia-completa" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Guía Completa de Compostaje Domiciliario
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Aprende paso a paso cómo crear y mantener tu propio sistema de compostaje casero 
          para convertir tus residuos orgánicos en abono natural de alta calidad.
        </p>
      </motion.div>

      {/* Guide Steps */}
      <div className="grid md:grid-cols-2 gap-8">
        {guideSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                    <step.icon className="w-6 h-6" />
                  </div>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* What to Compost */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                ✅ SÍ Puedes Compostar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {compostableItems.yes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                ❌ NO Debes Compostar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {compostableItems.no.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CompostGuide;
