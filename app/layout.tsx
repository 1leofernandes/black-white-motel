import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRETO & BRANCO MOTEL',
  description: 'O primeiro motel da região Sudoeste de Goiânia. Tradição desde os anos 80.',
  keywords: [
    'motel goiânia',
    'motel região sudoeste',
    'suíte hidromassagem',
    'motel discreto',
    'PRETO & BRANCO MOTEL',
    'motel perto de mim',
    'hospedagem goiânia',
    'motel romântico',
    'garagem privativa'
  ],
  
  authors: [{ name: 'PRETO & BRANCO MOTEL' }],
  creator: 'PRETO & BRANCO MOTEL',
  publisher: 'PRETO & BRANCO MOTEL',
  category: 'Motel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn('min-h-screen bg-white font-sans antialiased overflow-x-hidden w-full')}>
        {children}
      </body>
    </html>
  )
}