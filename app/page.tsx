import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Core from "@/components/core"
import Benefits from "@/components/benefits"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Industries from "@/components/Industries"

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-white">
      <Header />
      <Hero />
      <Services />
      <Core />
      <Benefits />
      <Industries/>
      <Contact />
      <Footer />
    </div>
  )
}
