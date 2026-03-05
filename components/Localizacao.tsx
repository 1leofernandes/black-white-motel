import { MapPin, ExternalLink } from 'lucide-react'

export function Localizacao() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Onde Estamos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Localização privilegiada, fácil acesso para quem chega de viagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.3292437308965!2d-49.317912002558835!3d-16.7111774090447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7094b2464bd%3A0xe5faff575aca5c9b!2sPRETO%26BRANCO%20MOTEL!5e0!3m2!1spt-BR!2sbr!4v1772686581438!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-semibold mb-1">Endereço</h3>
                <p className="text-gray-700">
                  Av. dos Alpes, Quadra 45 lote 04 numero 2216 - Jardim Europa<br />
                  Goiânia - GO, 74325-010
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-3">Referência</h3>
              <p className="text-gray-700">
                Próximo aos bares do Jardim Atlântico e Vila União. Fácil acesso para viajantes.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <a
                href="https://share.google/1rXuejZDHk8tmfYxM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <ExternalLink size={18} />
                Ver no Google Meu Negócio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}