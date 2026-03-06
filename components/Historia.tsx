'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Historia() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="historia" className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Nossa <span className="text-accent">História</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                No final dos anos 80, um jovem empreendedor chamado <strong>Dino</strong>, já atuante no ramo de vidros, enxergou uma oportunidade única: levar entretenimento e conforto para a região Sudoeste de Goiânia. Na época, os motéis se concentravam apenas na BR-153 e na saída para Trindade.
              </p>
              <p>
                Determinado e visionário, Dino inaugurou o <strong>PRETO & BRANCO MOTEL</strong>, o primeiro da região. O sucesso foi imediato, e nos anos 90 o motel viveu seu ápice, tornando-se referência e abrindo caminho para outros empreendimentos que hoje existem no local.
              </p>
              <p>
                Até hoje, mantemos a essência de oferecer momentos especiais com discrição, conforto e praticidade.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent">1989</div>
                <div className="text-xs sm:text-sm text-gray-600">Fundação</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-300 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent">1995</div>
                <div className="text-xs sm:text-sm text-gray-600">Ápice</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-300 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent">2025</div>
                <div className="text-xs sm:text-sm text-gray-600">Renovação</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/logonav.png"
                alt="Logo do Motel"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}