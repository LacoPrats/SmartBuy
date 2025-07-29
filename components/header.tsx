"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-950 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/images/sb-logo.png" 
              alt="SmartBuy Logo" 
              width={180} 
              height={60} 
              className="h-12 w-auto filter brightness-0 invert" 
            />
          </div>

          {/* Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-white hover:text-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#core" className="text-white hover:text-blue-600 transition-colors">
              Nuestro Core
            </a>
            <a href="#beneficios" className="text-white hover:text-blue-600 transition-colors">
              Beneficios
            </a>
            <a href="#contacto" className="text-white hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Botón Desktop */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contactanos</Button>
          </div>

          {/* Botón Mobile */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#servicios" className="text-white hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Servicios
            </a>
            <a href="#core" className="text-white hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Nuestro Core
            </a>
            <a href="#beneficios" className="text-white hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Beneficios
            </a>
            <a href="#contacto" className="text-white hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Contacto
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-3/4" onClick={() => setIsOpen(false)}>
              Contactanos
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
