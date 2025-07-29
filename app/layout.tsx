import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart Buy',
  description: 'Created with v0',
 icons: {
    icon: "/favicon.ico", // o .ico o .svg según tu archivo
  },
  generator: 'Smart Buy',
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
