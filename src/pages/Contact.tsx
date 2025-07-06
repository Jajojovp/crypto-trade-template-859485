import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, QrCode } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("¡Gracias por tu interés! Te contactaremos pronto para coordinar tu kit de compostaje.");
  };

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
            ¡Comienza tu Compostaje Inteligente!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Únete a nuestra red de compostaje domiciliario. Completa el formulario y recibe tu kit 
            con compostador y código QR para comenzar a transformar tus residuos orgánicos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-primary" />
                  Solicitar Kit de Compostaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre</label>
                      <Input placeholder="Tu nombre completo" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Apellido</label>
                      <Input placeholder="Tu apellido" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="tu@email.com" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input placeholder="+56 9 1234 5678" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Dirección Completa</label>
                    <Textarea placeholder="Dirección donde entregaremos tu kit de compostaje" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">¿Por qué quieres comenzar a compostar?</label>
                    <Textarea placeholder="Cuéntanos tu motivación (opcional)" />
                  </div>
                  
                  <Button type="submit" className="w-full button-gradient">
                    Solicitar Mi Kit de Compostaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>¿Cómo Funciona?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Solicita tu Kit</h4>
                    <p className="text-sm text-muted-foreground">Completa el formulario y te contactaremos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Recibe tu Compostador</h4>
                    <p className="text-sm text-muted-foreground">Te entregamos el kit con código QR único</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Comienza a Compostar</h4>
                    <p className="text-sm text-muted-foreground">Usa tu dashboard personal para seguimiento</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contacto@compostajeinteligente.cl</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+56 2 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Santiago, Chile</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;