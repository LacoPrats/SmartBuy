import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart Buy',
  description: 'Somos una consultora de abastecimiento estratégico que se especializa en optimizar procesos de adquisición, generar ahorros concretos y profesionalizar la gestión de compras. Acompañamos a cada organización con cercanía, transparencia y compromiso, adaptando nuestras soluciones al perfil y necesidades de cada cliente.',
 icons: {
    icon: "/favicon.ico", // o .ico o .svg según tu archivo
  },
  generator: 'Smart Buy',
    keywords: [
   "Abastecimiento estratégico",
    "Consultora de compras",
    "Outsourcing de compras",
    "Gestión de adquisiciones",
    "Consultoría en compras y abastecimiento",
    "Estrategias de sourcing",
    "Procurement estratégico",
    "Gestión de proveedores",
    "Optimización de procesos de compras",

    // 📍 Palabras clave geográficas
    "Consultora de compras en Buenos Aires",
    "Consultoría de abastecimiento en CABA",
    "Outsourcing de compras en Argentina",
    "Consultoría de compras en GBA",
    "Asesoramiento en adquisiciones Argentina",

    // 🎯 Palabras clave orientadas al cliente
    "Consultora de compras para instituciones",
    "Gestión de compras para clubes de campo",
    "Compras para instituciones educativas",
    "Ahorro en compras para instituciones",
    "Servicios de abastecimiento para organizaciones",

    // 💡 Palabras clave de resultados
    "Reducción de costos en compras",
    "Optimización del gasto institucional",
    "Estrategias para ahorro en adquisiciones",
    "Mejora de eficiencia en compras",
    "Licitaciones y contrataciones optimizadas",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
