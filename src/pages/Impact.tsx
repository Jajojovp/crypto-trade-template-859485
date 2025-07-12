
import { motion } from "framer-motion";
import { BarChart, TrendingUp, Leaf, Home, Users, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const impactStats = [
    {
      icon: Home,
      number: "2,847",
      label: "Familias con Tarro QR",
      color: "bg-green-500"
    },
    {
      icon: Leaf,
      number: "156.3",
      label: "Toneladas de Residuos Procesados",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      number: "423.8",
      label: "Toneladas de Residuos Evitados",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      number: "89.2",
      label: "Toneladas de CO₂ Reducidas",
      color: "bg-orange-500"
    }
  ];

  const monthlyData = [
    { month: "Ene", households: 1200, compost: 45, waste: 120 },
    { month: "Feb", households: 1450, compost: 58, waste: 155 },
    { month: "Mar", households: 1680, compost: 72, waste: 190 },
    { month: "Abr", households: 1920, compost: 89, waste: 235 },
    { month: "May", households: 2180, compost: 105, waste: 280 },
    { month: "Jun", households: 2450, compost: 125, waste: 330 },
    { month: "Jul", households: 2847, compost: 156, waste: 424 }
  ];

  const neighborhoodImpact = [
    { name: "Villa Verde", households: 342, compost: 18.5, participation: 87 },
    { name: "Barrio Sustentable", households: 298, compost: 16.2, participation: 92 },
    { name: "Los Jardines", households: 267, compost: 14.8, participation: 78 },
    { name: "Eco Residencial", households: 234, compost: 13.1, participation: 95 },
    { name: "Colinas Verdes", households: 189, compost: 11.3, participation: 84 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🌍 El Impacto de Nuestra Red Inteligente
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cada tarro QR cuenta una historia de transformación. Descubre cómo nuestra 
            red de compostaje con retiro está revolucionando la gestión de residuos orgánicos.
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="button-gradient">
              Iniciar Ahora
            </Button>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`${stat.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Monthly Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary" />
                Progreso Mensual 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-sm font-medium w-8">{data.month}</span>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Hogares: {data.households}</span>
                        <span>Compost: {data.compost}t</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(data.households / 3000) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Neighborhood Rankings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Ranking por Barrio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {neighborhoodImpact.map((neighborhood, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 border rounded-lg bg-white shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          #{index + 1} {neighborhood.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {neighborhood.households} hogares • {neighborhood.compost}t compost
                        </p>
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {neighborhood.participation}% participación
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${neighborhood.participation}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="bg-primary h-2 rounded-full"
                        />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Impact;
