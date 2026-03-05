'use client'

import { Menu, X, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#historia', label: 'História' },
  { href: '#quartos', label: 'Quartos' },
  { href: '#sexshop', label: 'Sex Shop' },
  { href: '#promocoes', label: 'Promoções' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      // initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-red-900/90 backdrop-blur-xl border-b border-white/10 py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.png"
              alt="Preto & Branco Motel"
              width={180}
              height={40}
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/5562993148177"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              WhatsApp
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none relative z-10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-lg font-medium text-gray-300 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5562993148177"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-lg font-medium text-accent"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}