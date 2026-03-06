'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flag, Clock, Gift } from 'lucide-react'
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

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="promocoes" className="relative py-32 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/headermotogp.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold text-center text-white mb-16"
        >
          <span className="text-accent">MotoGP</span> Goiânia
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-accent" size={32} />
              <h3 className="text-2xl font-bold">Contagem Regressiva</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Faltam apenas <span className="text-accent font-bold">{timeLeft.dias} dias</span> para o grande evento MotoGP! 
              Confira nossas promoções especiais e garanta sua reserva.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="bg-gradient-to-b from-accent to-red-700 rounded-xl p-4 shadow-2xl">
                    <span className="text-4xl font-bold">{value}</span>
                  </div>
                  <span className="block mt-2 text-sm uppercase tracking-wider text-gray-400">{key}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <Flag className="text-accent" size={32} />
              <h3 className="text-2xl font-bold">Abertura Exclusiva</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Estaremos abertos exclusivamente para receber todos os participantes da etapa MotoGP Goiânia.
              <br />
              <span className="block mt-4 font-semibold text-accent">📍 Reserve seu horário!</span>
            </p>
            <div className="flex items-center gap-4">
              <Gift className="text-accent" size={24} />
              <span className="text-lg">Brindes especiais para quem reservar antecipadamente.</span>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/5562993148177"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all hover:scale-105 hover:shadow-2xl"
              >
                Garanta sua promoção
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}