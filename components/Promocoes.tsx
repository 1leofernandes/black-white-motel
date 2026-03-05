'use client'

import { useEffect, useState } from 'react'
import { Flag, Clock } from 'lucide-react'
import Image from 'next/image'

const getMotoGPDay = () => {
  return new Date(2026, 2, 20, 10, 0, 0, 0)
}

export function Promocoes() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  useEffect(() => {
    const target = getMotoGPDay()

    const interval = setInterval(() => {
      const now = new Date()
      const diff = target.getTime() - now.getTime()

      if (diff <= 0) {
        clearInterval(interval)
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
        return
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutos = Math.floor((diff / 1000 / 60) % 60)
      const segundos = Math.floor((diff / 1000) % 60)

      setTimeLeft({ dias, horas, minutos, segundos })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="promocoes" className="relative py-20 bg-gray-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="/headermotogp.jpg"
          alt="Fachada do motel"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-thin text-6xl font-bold text-center text-gray-200 mb-12">
          MotoGP Goiânia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent">
            <div className="flex items-center gap-3 text-accent mb-4">
              <Clock size={32} />
              <h3 className="text-2xl font-bold">Contagem Regressiva</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Faltam apenas <span className="font-bold text-accent">{timeLeft.dias} dias</span> para o grande evento MotoGP! 
              Confira nossas promoções especiais e garanta sua reserva.
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-gray-900 text-white p-3 rounded">
                <span className="text-3xl font-bold">{timeLeft.dias}</span>
                <span className="block text-xs">dias</span>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded">
                <span className="text-3xl font-bold">{timeLeft.horas}</span>
                <span className="block text-xs">horas</span>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded">
                <span className="text-3xl font-bold">{timeLeft.minutos}</span>
                <span className="block text-xs">min</span>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded">
                <span className="text-3xl font-bold">{timeLeft.segundos}</span>
                <span className="block text-xs">seg</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent">
            <div className="flex items-center gap-3 text-accent mb-4">
              <Flag size={32} />
              <h3 className="text-2xl font-bold">Abertura Exclusiva</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Estaremos abertos exclusivamente para receber todos os participantes da etapa MotoGP Goiânia.
              <br />
              <span className="block mt-4 font-semibold">📍 Reserve seu horário!</span>
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/5562993148177"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Garanta sua promoção
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}