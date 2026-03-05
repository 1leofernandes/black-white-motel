import Image from 'next/image'
import { Camera } from 'lucide-react'

const rooms = [
  {
    id: 1,
    name: 'Suíte Vermelho Paixão',
    description: 'Design minimalista com detalhes em vermelho, cama e hidro.',
    image: '/suite4.jpg',
    has360: true,
  },
  {
    id: 2,
    name: 'Suíte Preto & Branco',
    description: 'Clima envolvente, iluminação cênica e acabamento premium.',
    image: '/suite5.jpg',
    has360: true,
  },
  {
    id: 3,
    name: 'Master Luxo',
    description: 'Ampla suíte com sala de estar, banheira e frigobar.',
    image: '/suite2.jpg',
    has360: false,
  },
]

export function Quartos() {
  return (
    <section id="quartos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Nossos Quartos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ambientes sofisticados em preto, branco e toques de vermelho para momentos inesquecíveis. Conheça nossas suítes premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg transition hover:shadow-2xl"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                {room.has360 && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Camera size={14} />
                    360°
                  </div>
                )}
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-300 text-sm">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}