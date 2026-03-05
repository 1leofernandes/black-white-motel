'use client'

import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { href: '#historia', label: 'História' },
  { href: '#quartos', label: 'Quartos' },
  { href: '#sexshop', label: 'Sex Shop' },
  { href: '#promocoes', label: 'Promoções' },
  { href: '#localizacao', label: 'Localização' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-red-900/90 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-white rounded-md">
              <Image
                src="/logo.png"
                alt="Logo do motel"
                width={250}
                height={50}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5562993148177"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <Phone size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 bg-black px-4 pb-3 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5562993148177"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-base font-medium text-accent"
          >
            <Phone size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}