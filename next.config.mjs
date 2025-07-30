/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔹 Esto genera la carpeta /out automáticamente
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig