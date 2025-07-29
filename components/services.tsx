import { ShoppingCart, FileText, BarChart3, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Gestión Integral de Compras",
      description: "Administración completa de procesos de compra desde la planificación hasta la ejecución",
    },
    {
      icon: FileText,
      title: "Licitaciones y Contrataciones",
      description: "Gestión especializada de procesos licitatorios y contrataciones estratégicas",
    },
    {
      icon: BarChart3,
      title: "Análisis de Gasto y Demanda",
      description: "Análisis profundo de patrones de gasto y predicción de demanda futura",
    },
    {
      icon: Users,
      title: "Gestión de Proveedores",
      description: "Desarrollo y gestión estratégica de la red de proveedores",
    },
  ]

  return (
    <section
      id="servicios"
      className="min-h-screen py-20 px-4 bg-blue-950 flex items-center"
    >
      <div className="container mx-auto max-w-6xl w-full animate-fade-in">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Qué Hacemos?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para optimizar tu gestión de compras
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-white/10"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-6">
                    <IconComponent className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-snug">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
