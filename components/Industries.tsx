'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const industries = [
  {
    name: 'Financiera',
    image: '/images/financiera.png',
    categories: [
      { name: 'Infraestructura tecnológica (cloud, servidores, redes)', monto: '$16.666.666', eficiencia: '8%' },
      { name: 'Consultores IT / Tarifarios por perfil', monto: '$10.833.333', eficiencia: '11%' },
      { name: 'Mantenimiento y limpieza', monto: '$6.416.666', eficiencia: '19%' },
       { name: 'Servicios de logística de valores y efectivo', monto: ' $ 19.166.666,67', eficiencia: '4%' },
        { name: 'Servicios de seguridad física y electrónica', monto: ' $ 12.500.000,00', eficiencia: '9%' },
         { name: 'Servicios de logística programa de beneficios', monto: ' $ 2.916.666,67', eficiencia: '14%' },
          { name: 'Servicio de Catering', monto: ' $ 2.833.333,33', eficiencia: '13%' },
    ],
  },
  {
    name: 'Energía',
    image: '/images/energia.jpeg',
    categories: [
      { name: 'Gestión de residuos industriales', monto: '$1.666.666', eficiencia: '6%' },
      { name: 'Instalaciones y servicios de mantenimiento ', monto: '$ 1.416.666,67', eficiencia: '9%' },
       { name: 'Obras civiles y electromecánicas', monto: '$2.916.666', eficiencia: '7%' },
        { name: 'Servicios de mantenimiento y operación de plantas', monto: ' $ 6.416.666,67', eficiencia: '19%' },
    ],
  },
  {
    name: 'Agropecuaria',
    image: '/images/agropecuaria.jpg',
    categories: [
      { name: 'Vacunas y antiparasitarios', monto: '$2.083.333', eficiencia: '5%' },
      { name: 'Equipamiento manejo sanitario', monto: '$2.416.666', eficiencia: '9%' },
        { name: 'Antibióticos y promotores de crecimiento', monto: ' $ 1.083.333,33', eficiencia: '8%' },
          { name: 'Infraestructura y Equipamiento', monto: ' $ 4.166.666,67', eficiencia: '4%' },
    ],
  },
  {
    name: 'Papelera',
    image: '/images/papelera.jpg',
    categories: [
      { name: 'Materiales de Empaque', monto: '$3.166.666', eficiencia: '12%' },
        { name: 'Marketing y Merchandising', monto: ' $ 1.250.000,00', eficiencia: '7%' },
        
    ],
  },
  {
    name: 'Construcción',
    image: '/images/financiera.jpg',
    categories: [
      { name: 'Equipos y maquinaria pesada', monto: '$8.333.333', eficiencia: '11%' },
       { name: 'Seguridad e Higiene', monto: '$ 2.083.333,33', eficiencia: '8%' },
        { name: 'Infraestructura Provisional', monto: ' $ 2.416.666,67', eficiencia: '12%' },
    ],
  },
];

export default function Industries() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 bg-blue-50 text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
        Industrias
      </h2>

      {/* Contenedor responsive centrado */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1600px] mx-auto">
        {industries.map((industry) => {
          const isActive = selected === industry.name;
          return (
            <Card
              key={industry.name}
              className={`cursor-pointer rounded-2xl overflow-hidden bg-white text-black shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.03] ${
                isActive ? 'ring-2 ring-blue-500' : ''
              } min-h-[320px] w-full sm:w-[300px] md:w-[280px] lg:w-[260px] xl:w-[240px]`}
              onClick={() => setSelected(isActive ? null : industry.name)}
            >
              <div className="relative w-full h-48">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>

              <CardContent className="py-4 px-4 text-center">
                <h3 className="text-lg font-bold mb-1">{industry.name}</h3>
                <p className="text-xs text-gray-600">
                  Click para ver categorías
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detalle dinámico que expande el contenedor */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 w-full max-w-5xl"
          >
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl border border-white/10 text-black">
              <h3 className="text-3xl font-bold mb-6">
                {selected} - Categorías y métricas
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="pb-2">Categoría</th>
                      <th className="pb-2 text-right">Monto USD</th>
                      <th className="pb-2 text-right">Eficiencia</th>
                    </tr>
                  </thead>
                <tbody>
  {industries
    .find((ind) => ind.name === selected)
    ?.categories.map((cat, i) => (
      <tr
        key={i}
        className="border-b border-gray-200 hover:bg-gray-100 transition"
      >
        <td className="py-2 pr-2">{cat.name}</td>
        <td className="py-2 text-right text-black font-medium whitespace-nowrap">
          {cat.monto.replace(/\s+/g, ' ').trim()}
        </td>
        <td className="py-2 text-right">{cat.eficiencia}</td>
      </tr>
    ))}
</tbody>

                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
