import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white text-blue-950 min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl text-center flex flex-col items-center justify-center space-y-10 animate-fade-in">
        
        {/* Logo */}
        <div className="flex items-center justify-center animate-fade-in-up delay-100">
          <Image
            src="/images/sb-logo.png"
            alt="SmartBuy Logo"
            width={700}
            height={500}
            className="h-53 w-auto transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Título */}
        <h1 className="text-base md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Cuidamos tu compra. Acompañamos tu gestión
        </h1>

        {/* Botón con interacción */}
       <Button
  asChild
  className="relative overflow-hidden bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 text-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-300 group"
>
  <a href="#servicios" className="bg-blue-600 hover:bg-blue-700 text-whiterelative z-10 flex items-center justify-center">
    Conoce más
    <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
  </a>
</Button>
        {/* Métricas con interacciones */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-900 text-lg font-medium animate-fade-in-up delay-500">
          {[
            { label: "+15", desc: "categorías gestionadas" },
            { label: "100%", desc: "transparencia", subtle: true },
            { label: "20%", desc: "de ahorro promedio" }
          ].map((item, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-300 transform hover:scale-105 hover:text-blue-700 hover:shadow-sm p-2 rounded-lg ${
                item.subtle
                  ? "border-b-2 border-blue-400 pb-1 font-semibold"
                  : ""
              }`}
            >
              <span className="text-xl">{item.label}</span>
              <br />
              {item.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
