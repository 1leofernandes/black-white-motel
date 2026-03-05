import { Sparkles, Heart } from 'lucide-react'

const products = [
  { name: 'Vibradores', icon: Sparkles },
  { name: 'Óleos e Géis', icon: Heart },
  { name: 'Lingerie', icon: Heart },
  { name: 'Acessórios', icon: Sparkles },
]

export function SexShop() {
  return (
    <section id="sexshop" className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl font-bold mb-4">Sex Shop</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Produtos de alta qualidade para apimentar sua relação. Disponível 24h em nossa recepção.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 border border-white/10 rounded-lg hover:border-accent transition"
            >
              <item.icon size={40} className="text-accent mb-3" />
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://wa.me/5562993148177"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-lg font-semibold hover:bg-red-700 transition"
          >
            Consulte disponibilidade
          </a>
        </div>
      </div>
    </section>
  )
}