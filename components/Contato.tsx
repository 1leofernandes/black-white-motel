'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export function Contato() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contato" className="relative py-32 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold mb-4"
        >
          Fale <span className="text-accent">Conosco</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-300 mb-16"
        >
          Atendimento rápido e discreto via WhatsApp.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <motion.a
            href="https://wa.me/5562993148177"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="group relative flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all shadow-2xl"
          >
            <FaWhatsapp size={28} />
            (62) 99314-8177
          </motion.a>

          <motion.a
            href="mailto:lollatelles@gmail.com"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all shadow-2xl"
          >
            <Mail size={28} />
            Enviar Email
          </motion.a>
        </div>
      </div>
    </section>
  )
}