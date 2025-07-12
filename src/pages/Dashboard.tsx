
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Award, Sprout, Calendar, Users, QrCode, BarChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CompostProgress from "@/components/dashboard/CompostProgress";
import WeeklyTips from "@/components/dashboard/WeeklyTips";
import PointsSystem from "@/components/dashboard/PointsSystem";
import CommunityActivity from "@/components/dashboard/CommunityActivity";

const Dashboard = () => {
  const { qrCode } = useParams();
  
  // Mock data - in real app this would come from QR code scan
  const householdData = {
    id: qrCode || "CASA001",
    family: "Familia González",
    address: "Calle Verde 123, Villa Nueva",
    joinDate: "2024-03-15",
    currentPoints: 1250,
    totalCompost: 85.5,
    weeklyStreak: 12,
    rank: 23
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <div className="container px-4 pt-24 pb-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 text-white p-3 rounded-lg">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                🏠 Tu Historia de Compostaje - {householdData.family}
              </h1>
              <p className="text-gray-600">📍 {householdData.address} • Miembro desde {householdData.joinDate}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Puntos Verdes</p>
                    <p className="text-2xl font-bold">{householdData.currentPoints.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Sprout className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Residuos Procesados</p>
                    <p className="text-2xl font-bold">{householdData.totalCompost} kg</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Retiros Consecutivos</p>
                    <p className="text-2xl font-bold">{householdData.weeklyStreak}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <BarChart className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Ranking Community</p>
                    <p className="text-2xl font-bold">#{householdData.rank}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <CompostProgress householdData={householdData} />
            <WeeklyTips />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <PointsSystem currentPoints={householdData.currentPoints} />
            <CommunityActivity />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
