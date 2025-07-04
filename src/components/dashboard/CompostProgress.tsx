
import { motion } from "framer-motion";
import { Calendar, Sprout, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CompostProgressProps {
  householdData: {
    totalCompost: number;
    weeklyStreak: number;
  };
}

const CompostProgress = ({ householdData }: CompostProgressProps) => {
  const weekData = [
    { week: "Sem 1", compost: 2.1, scanned: true },
    { week: "Sem 2", compost: 1.8, scanned: true },
    { week: "Sem 3", compost: 2.4, scanned: true },
    { week: "Sem 4", compost: 2.0, scanned: false },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sprout className="w-5 h-5 text-green-600" />
          Progreso de Compostaje del Mes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress Chart */}
          <div className="grid grid-cols-4 gap-4">
            {weekData.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-2">
                  <div className="w-12 h-24 bg-gray-200 rounded-lg mx-auto overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(week.compost / 3) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-t from-green-600 to-green-400 w-full absolute bottom-0"
                    />
                  </div>
                  {week.scanned && (
                    <div className="absolute -top-2 -right-1 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-600">{week.week}</p>
                <p className="text-xs font-semibold">{week.compost} kg</p>
              </motion.div>
            ))}
          </div>

          {/* Weekly Actions */}
          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4">Acciones de Esta Semana</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Registrar actividad semanal</span>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Escanear QR
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Revisar consejos semanales</span>
                </div>
                <Button size="sm" variant="outline">
                  +50 puntos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompostProgress;
