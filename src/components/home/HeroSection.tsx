
import { motion } from "framer-motion";
import { QrCode, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import compostBinsImage from "@/assets/compost-bins.jpg";

const HeroSection = () => {
  return (
    <section className="container px-4 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            ♻️ Compostaje Domiciliario Inteligente
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforma tus{" "}
            <span className="text-green-600">Residuos Orgánicos</span>.{" "}
            <span className="text-emerald-600">Nosotros nos encargamos del resto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Recibe tu tarro compostador con QR, deposita tus restos orgánicos, y nosotros lo retiramos, 
            compostamos y te devolvemos compost o descuentos en alimentos locales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/contacto">
                <QrCode className="mr-2 w-5 h-5" />
                🚛 Quiero Participar
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
              <Link to="/contacto" className="flex items-center">
                <Sprout className="mr-2 w-5 h-5" />
                📦 Suscríbete Hoy
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>+2,500 familias participando</span>
            </div>
            <div className="flex items-center gap-2">
              <Sprout className="w-4 h-4" />
              <span>15 toneladas de compost producido</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
            <img
              src={compostBinsImage}
              alt="Compostador casero con código QR para compostaje domiciliario inteligente"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tu Tarro Compostador con QR
              </h3>
              <p className="text-gray-600">
                Recibe un balde reutilizado con código QR personalizado. 
                Nosotros nos encargamos del retiro y compostaje.
              </p>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-20"
          >
            <QrCode className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg z-20"
          >
            <Sprout className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
