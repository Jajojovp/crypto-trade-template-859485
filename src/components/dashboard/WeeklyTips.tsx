
import { motion } from "framer-motion";
import { Book, Leaf, Droplets, ThermometerSun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeeklyTips = () => {
  const tips = [
    {
      icon: Leaf,
      title: "Balance Verde-Marrón",
      description: "Esta semana, asegúrate de mantener una proporción 3:1 entre materiales marrones (hojas secas, papel) y verdes (restos de cocina).",
      status: "new"
    },
    {
      icon: Droplets,
      title: "Control de Humedad",
      description: "Si tu compost está demasiado húmedo, agrega hojas secas o papel. Si está seco, rocía un poco de agua.",
      status: "read"
    },
    {
      icon: ThermometerSun,
      title: "Temperatura Ideal",
      description: "El compost debe estar tibio al tacto. Si está frío, voltéalo para oxigenarlo y activar la descomposición.",
      status: "read"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="w-5 h-5 text-blue-600" />
          Consejos Semanales de Compostaje
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 rounded-lg border-l-4 ${
                tip.status === 'new' 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-gray-50 border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  tip.status === 'new' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <tip.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tip.title}
                    {tip.status === 'new' && (
                      <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                        Nuevo
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyTips;
