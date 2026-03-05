'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Camera, Maximize2 } from 'lucide-react'

const rooms = [
  {
    id: 1,
    name: 'Suíte Vermelho Paixão',
    description: 'Design minimalista com detalhes em vermelho, cama e hidro.',
    image: '/suite4.jpg',
    has360: true,
    features: ['Hidromassagem', 'Som ambiente', 'Frigobar'],
  },
  {
    id: 2,
    name: 'Suíte Preto & Branco',
    description: 'Clima envolvente, iluminação cênica e acabamento premium.',
    image: '/suite5.jpg',
    has360: true,
    features: ['Iluminação LED', 'TV 4K', 'Espelho no teto'],
  },
  {
    id: 3,
    name: 'Master Luxo',
    description: 'Ampla suíte com sala de estar, banheira e frigobar.',
    image: '/suite2.jpg',
    has360: false,
    features: ['Banheira', 'Sala de estar', 'Ar condicionado'],
  },
]

export function Quartos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="quartos" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-accent">Quartos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ambientes sofisticados em preto, branco e toques de vermelho para momentos inesquecíveis. Conheça nossas suítes premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {room.has360 && (
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border border-white/20">
                    <Camera size={14} />
                    360°
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white w-10 h-10" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}