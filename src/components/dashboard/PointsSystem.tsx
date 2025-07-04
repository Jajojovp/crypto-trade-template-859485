
import { motion } from "framer-motion";
import { Award, Gift, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PointsSystemProps {
  currentPoints: number;
}

const PointsSystem = ({ currentPoints }: PointsSystemProps) => {
  const rewards = [
    { name: "Semillas de Tomate", points: 500, available: true, icon: "🍅" },
    { name: "Herramientas de Jardín", points: 1000, available: true, icon: "🛠️" },
    { name: "Abono Orgánico Premium", points: 800, available: true, icon: "🌱" },
    { name: "Taller de Permacultura", points: 1500, available: false, icon: "📚" }
  ];

  const nextLevel = Math.ceil(currentPoints / 1000) * 1000;
  const progress = (currentPoints / nextLevel) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-600" />
          Sistema de Puntos Verdes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Points Progress */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progreso hacia siguiente nivel</span>
              <span className="text-sm font-semibold">{currentPoints}/{nextLevel}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full"
              />
            </div>
          </div>

          {/* Available Rewards */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Premios Disponibles
            </h4>
            <div className="space-y-3">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`p-3 rounded-lg border ${
                    reward.available && currentPoints >= reward.points
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{reward.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{reward.name}</p>
                        <p className="text-xs text-gray-600 flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {reward.points} puntos
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      disabled={!reward.available || currentPoints < reward.points}
                      className="text-xs"
                    >
                      {currentPoints >= reward.points ? 'Canjear' : 'Bloqueado'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsSystem;
