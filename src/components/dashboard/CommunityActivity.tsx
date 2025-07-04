
import { motion } from "framer-motion";
import { Users, Bell, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommunityActivity = () => {
  const activities = [
    {
      type: "achievement",
      user: "María Silva",
      action: "completó 10 semanas consecutivas",
      time: "hace 2 horas",
      icon: "🏆"
    },
    {
      type: "tip",
      user: "Moderador",
      action: "compartió un consejo sobre humedad",
      time: "hace 4 horas",
      icon: "💡"
    },
    {
      type: "community",
      user: "Carlos Ruiz",
      action: "inició un jardín comunitario",
      time: "hace 1 día",
      icon: "🌱"
    },
    {
      type: "milestone",
      user: "Comunidad",
      action: "alcanzó 50 toneladas de compost",
      time: "hace 2 días",
      icon: "🎯"
    }
  ];

  const alerts = [
    {
      message: "Revisa la humedad de tu compost esta semana",
      type: "tip",
      urgent: false
    },
    {
      message: "¡Taller de lombricompostaje este sábado!",
      type: "event",
      urgent: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Community Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Actividad Comunitaria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-lg">{activity.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-orange-600" />
            Alertas y Notificaciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.urgent 
                    ? 'bg-orange-50 border-orange-500' 
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start gap-2">
                  <MessageSquare className={`w-4 h-4 mt-0.5 ${
                    alert.urgent ? 'text-orange-600' : 'text-blue-600'
                  }`} />
                  <p className="text-sm text-gray-700">{alert.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityActivity;
