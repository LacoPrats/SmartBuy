import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/images/sb-logo.png"
            alt="SmartBuy Logo"
            width={200}
            height={60}
            className="h-12 w-auto filter brightness-0 invert"
          />
        </div>
        <p className="text-center text-blue-200">Transformando la gestión de compras en ventaja competitiva</p>
        <div className="mt-6 pt-6 border-t border-blue-800 text-center text-sm text-blue-300">
          <p>&copy; 2025 SmartBuy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
