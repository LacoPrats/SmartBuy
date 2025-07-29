import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 px-4 bg-blue-950 text-white flex items-center"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Muchas Gracias
        </h2>
        <p className="text-lg md:text-xl mb-16 text-blue-100">
          Estamos listos para transformar tu gestión de compras
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Email */}
          <div className="flex items-center justify-center space-x-6 hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <Mail className="w-7 h-7" />
            </div>
            <div className="text-left">
              <div className="text-sm text-blue-200">Email</div>
              <div className="text-lg font-semibold break-all">
                Comercial@sbconsulting.com.ar
              </div>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center justify-center space-x-6 hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <Phone className="w-7 h-7" />
            </div>
            <div className="text-left">
              <div className="text-sm text-blue-200">Teléfono</div>
              <div className="text-lg font-semibold">11-6957-9514</div>
            </div>
          </div>
        </div>

        <Button className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-md transition-transform hover:scale-105">
          Contactanos
        </Button>
      </div>
    </section>
  );
}
