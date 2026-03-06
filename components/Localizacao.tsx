'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, ExternalLink, Navigation } from 'lucide-react'

export function Localizacao() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="localizacao" className="py-32 bg-gray-50">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Onde <span className="text-accent">Estamos</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Localização privilegiada, fácil acesso para quem chega de viagem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.3292437308965!2d-49.317912002558835!3d-16.7111774090447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7094b2464bd%3A0xe5faff575aca5c9b!2sPRETO%26BRANCO%20MOTEL!5e0!3m2!1spt-BR!2sbr!4v1772686581438!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent rounded-full shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
              <MapPin className="text-accent flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Endereço</h3>
                <p className="text-gray-700 text-sm sm:text-lg">
                  Av. dos Alpes, Quadra 45 lote 04 numero 2216 - Jardim Europa<br />
                  Goiânia - GO, 74325-010
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Referência</h3>
              <p className="text-gray-700 text-sm sm:text-lg">
                Próximo aos bares do Jardim Atlântico e Vila União. Fácil acesso para viajantes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <a
                href="https://share.google/1rXuejZDHk8tmfYxM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:bg-red-700 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <ExternalLink size={18} />
                <span>Google Meu Negócio</span>
              </a>
              <a
                href="https://maps.google.com/?q=Preto+Branco+Motel+Goiania"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <Navigation size={18} />
                <span>Traçar rota</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}