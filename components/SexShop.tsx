'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Heart, Flame, Droplet } from 'lucide-react'

const products = [
  { name: 'Vibradores', icon: Sparkles},
  { name: 'Óleos e Géis', icon: Droplet},
  { name: 'Lingerie', icon: Heart},
  { name: 'Acessórios', icon: Flame},
]

export function SexShop() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="sexshop" className="relative py-32 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [null, '-20%', '20%'],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold mb-4"
        >
          Sex <span className="text-accent">Shop</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Produtos de alta qualidade para apimentar sua relação. Disponível 24h em nossa recepção.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1}}
                className="group cursor-pointer"
              >
                <div className={'relative p-8 bg-gradient-to-br rounded-2xl shadow-2xl overflow-hidden border border-red-500'}>
                  <Icon size={48} className="mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <a
            href="https://wa.me/5562993148177"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 hover:shadow-2xl"
          >
            Consulte disponibilidade
          </a>
        </motion.div>
      </div>
    </section>
  )
}