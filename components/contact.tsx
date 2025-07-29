import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 px-4 bg-blue-950 text-white flex items-center"
    >
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        
        {/* Título */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Muchas Gracias
          </h2>
          <p className="text-lg md:text-xl text-blue-100">
            Estamos listos para transformar tu gestión de compras
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col md:flex-row items-center md:justify-evenly gap-6">
          
          {/* Email */}
        <a
  href="mailto:comercial@sbconsulting.com.ar"
  className="flex items-center gap-4 bg-blue-900/40 rounded-xl shadow-md border border-blue-800 px-6 py-4 w-full md:w-[45%] hover:scale-[1.03] transition-transform"
>
  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center shadow-sm">
    <Mail className="w-6 h-6" />
  </div>
  <div className="text-left">
    <p className="text-sm text-blue-200">Email</p>
    <p className="text-base md:text-lg font-semibold break-all">
      comercial@sbconsulting.com.ar
    </p>
  </div>
</a>

          {/* Teléfono */}
          <a
            href="tel:+541169579514"
            className="flex items-center gap-4 bg-blue-900/40 rounded-xl shadow-md border border-blue-800 px-6 py-4 w-full md:w-[45%] hover:scale-[1.03] transition-transform"
          >
            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-blue-200">Teléfono</p>
              <p className="text-base md:text-lg font-semibold">
                11-6957-9514
              </p>
            </div>
          </a>

        </div>

        {/* Botón */}
        <div>
          <a href="mailto:Comercial@sbconsulting.com.ar">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-md transition-transform hover:scale-105">
              Contactanos
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
