import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Compostaje Inteligente</h3>
              <p className="text-sm text-muted-foreground">
                Revolucionando la gestión de residuos orgánicos con tecnología QR y servicio de retiro comunitario.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Compostaje</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/educacion" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Guías Tarro QR
                  </a>
                </li>
                <li>
                  <a href="/comunidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/soporte" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Soporte Técnico
                  </a>
                </li>
                <li>
                  <a href="/impacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Impacto Ambiental
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Rezaul Arif. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;