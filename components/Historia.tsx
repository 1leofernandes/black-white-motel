import Image from 'next/image'

export function Historia() {
  return (
    <section id="historia" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              No final dos anos 80, um jovem empreendedor chamado <strong>Dino</strong>, já atuante no ramo de vidros, enxergou uma oportunidade única: levar entretenimento e conforto para a região Sudoeste de Goiânia. Na época, os motéis se concentravam apenas na BR-153 e na saída para Trindade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Determinado e visionário, Dino inaugurou o <strong>PRETO & BRANCO MOTEL</strong>, o primeiro da região. O sucesso foi imediato, e nos anos 90 o motel viveu seu ápice, tornando-se referência e abrindo caminho para outros empreendimentos que hoje existem no local.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Até hoje, mantemos a essência de oferecer momentos especiais com discrição, conforto e praticidade.
            </p>
          </div>
          <div className="relative h-96 md:h-auto flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/logonav.png"
                alt="Logo do Motel"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}