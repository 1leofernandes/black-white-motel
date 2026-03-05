import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Fachada do motel"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="font-thin text-5xl md:text-7xl font-bold mb-4">
          PRETO & BRANCO MOTEL
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          O primeiro motel da região Sudoeste de Goiânia. Tradição desde os anos 80.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#quartos"
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition hover:bg-gray-200"
          >
            Conheça nossos quartos
          </Link>
          <a
            href="https://wa.me/5562993148177"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Reserve agora
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white flex justify-center">
          <div className="h-2 w-1 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}