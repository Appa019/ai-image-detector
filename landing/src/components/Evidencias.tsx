import type { Caso } from '../casos'

export function Evidencias({ caso }: { caso: Caso }) {
  return (
    <section className="mt-40" aria-labelledby="evidencias">
      <h2 id="evidencias" className="reveal max-w-[16ch] text-[clamp(28px,3.6vw,52px)]">O que vem junto com o score</h2>

      <div className="mt-16 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-4">
          <h3 className="text-[26px]">ELA: onde a compressão não bate</h3>
          <p className="mt-4 max-w-[46ch]">
            A análise de nível de erro recomprime a imagem em JPEG e compara com o original. Regiões com erro
            uniforme demais costumam indicar geração por IA.
          </p>
        </div>
        <img
          key={`${caso.id}-ela`}
          src={`/shots/${caso.id}-ela.webp`}
          width={865}
          height={324}
          loading="lazy"
          alt={`Aba ELA do app para ${caso.artigo}: mapa de erro de compressão em tons de roxo e laranja.`}
          className="reveal swap h-auto w-full bg-[#141416] lg:col-span-8"
          style={{ ['--d' as string]: '90ms' }}
        />
      </div>

      <div className="mt-28 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <img
          key={`${caso.id}-fft`}
          src={`/shots/${caso.id}-fft.webp`}
          width={865}
          height={324}
          loading="lazy"
          alt={`Aba Espectral do app para ${caso.artigo}: espectro de Fourier com a energia concentrada no centro.`}
          className="reveal swap order-2 h-auto w-full bg-[#141416] lg:order-1 lg:col-span-7"
        />
        <div className="reveal order-1 lg:order-2 lg:col-span-4 lg:col-start-9" style={{ ['--d' as string]: '90ms' }}>
          <h3 className="text-[26px]">Espectro: a energia em cada frequência</h3>
          <p className="mt-4 max-w-[46ch]">
            A transformada de Fourier mostra como a energia da imagem se distribui. Imagens geradas tendem a ter menos
            energia nas altas frequências. O analisador de frequência do ensemble trabalha nesse domínio.
          </p>
        </div>
      </div>

      <div className="mt-28 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-4">
          <h3 className="text-[26px]">Quanto os modelos concordam</h3>
          <p className="mt-4 max-w-[46ch]">
            Na foto da praia, os modelos concordaram só 40% e o intervalo de confiança de 95% foi de 0% a 89,4%. O app
            mostra essa incerteza ao lado do score.
          </p>
        </div>
        <img
          src="/shots/praia-estatisticas.webp"
          width={865}
          height={260}
          loading="lazy"
          alt="Aba Estatísticas do app para a foto da praia: concordância de 40% entre modelos, incerteza de 27 pontos, 7,9 segundos de análise e intervalo de confiança de 95% entre 0% e 89,4%."
          className="reveal h-auto w-full bg-[#141416] lg:col-span-7 lg:col-start-6"
          style={{ ['--d' as string]: '90ms' }}
        />
      </div>

      <div className="mt-28 grid gap-6 lg:grid-cols-12 lg:gap-10">
        <h3 className="reveal text-[26px] lg:col-span-4">E mais seis análises</h3>
        <p className="reveal max-w-[62ch] text-[20px] leading-[1.5] lg:col-span-8" style={{ ['--d' as string]: '90ms' }}>
          GradCAM com as regiões que mais pesaram na decisão, wavelets, noise print, filtros SRM, estatísticas de pixels
          e metadados EXIF com indicadores de geração por IA.
        </p>
      </div>
    </section>
  )
}
