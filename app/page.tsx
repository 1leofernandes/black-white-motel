import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Historia } from '@/components/Historia'
import { Quartos } from '@/components/Quartos'
import { SexShop } from '@/components/SexShop'
import { Promocoes } from '@/components/Promocoes'
import { Localizacao } from '@/components/Localizacao'
import { Contato } from '@/components/Contato'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Historia />
      <Quartos />
      <SexShop />
      <Promocoes />
      <Localizacao />
      <Contato />
      <Footer />
    </main>
  )
}