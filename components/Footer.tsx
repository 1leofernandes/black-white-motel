'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6"
          >
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} PRETO & BRANCO MOTEL. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}