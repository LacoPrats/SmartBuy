import { ArrowUpRight, Zap, Target, Award, DollarSign, Shield } from "lucide-react"

export default function Core() {
  const coreItems = [
    {
      icon: ArrowUpRight,
      title: "Externalización de Procesos",
      description: "Gestión completa de procesos de compra externalizados",
    },
    {
      icon: Zap,
      title: "Optimización Operativa",
      description: "Mejora continua de procesos operativos de compra",
    },
    {
      icon: Target,
      title: "Estrategias de Sourcing",
      description: "Desarrollo de estrategias de sourcing y negociación",
    },
    {
      icon: Award,
      title: "Know-how Especializado",
      description: "Experiencia en múltiples categorías de compra",
    },
    {
      icon: DollarSign,
      title: "Generación de Ahorros",
      description: "Identificación y materialización de ahorros",
    },
    {
      icon: Shield,
      title: "Control de Gasto",
      description: "Monitoreo y control efectivo del gasto",
    },
  ]

  return (
    <section id="core" className="min-h-screen py-20 px-4 bg-blue-50 flex items-center">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Nuestro Core</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-snug">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
