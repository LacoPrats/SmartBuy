import { CheckCircle, TrendingUp, DollarSign, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Mejores Condiciones Comerciales",
      description: "Negociaciones más efectivas y condiciones optimizadas",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Profesionalización",
      description: "Procesos claros y trazables en todas las operaciones",
      color: "purple",
    },
    {
      icon: DollarSign,
      title: "Ahorros Sostenibles",
      description: "Reducción de costos mantenida en el tiempo",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Transparencia",
      description: "Procesos claros y trazables en todas las operaciones",
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-100 text-blue-600";
  };

  return (
    <section
      id="beneficios"
      className="min-h-screen py-20 px-4 bg-gray-50 flex items-center"
    >
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Beneficios para el cliente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para optimizar tu gestión de compras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(
                      benefit.color
                    )}`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
