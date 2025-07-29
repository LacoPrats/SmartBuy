import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-white text-blue-950 min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center flex flex-col items-center justify-center space-y-10 animate-fade-in">
        
        {/* Logo con animación */}
        <div className="flex items-center justify-center animate-fade-in-up delay-100">
          <Image
            src="/images/sb-logo.png"
            alt="SmartBuy Logo"
            width={800}
            height={600}
            className="h-56 w-auto transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Título */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Cuidamos tu compra. Acompañamos tu gestión
        </h1>

        {/* Botón con animación */}
        <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 text-lg shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up delay-300">
          Conoce más
        </Button>

        {/* Métricas con hover */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-900 text-lg font-medium animate-fade-in-up delay-500">
          {[
            { label: "+15", desc: "categorías gestionadas" },
            { label: "20%", desc: "de ahorro promedio" },
            { label: "100%", desc: "transparencia" }
          ].map((item, i) => (
            <div
              key={i}
              className="text-center transform transition-transform duration-300 hover:scale-105"
            >
              <span className="text-xl font-bold">{item.label}</span><br />{item.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
