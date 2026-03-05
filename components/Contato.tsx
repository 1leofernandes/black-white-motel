import { Phone, MessageCircle, Mail } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl font-bold mb-4">Fale Conosco</h2>
        <p className="text-xl text-gray-300 mb-12">
          Atendimento rápido e discreto via WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/5562993148177"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
          >
            <FaWhatsapp size={24} />
            (62) 99314-8177
          </a>

          <a href="mailto:lollatelles@gmail.com" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
            <Mail size={24} />
            <span>Enviar Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}