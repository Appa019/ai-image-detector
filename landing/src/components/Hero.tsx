import { CASOS, REPO, type Caso, type CasoId } from '../casos'

type Props = { caso: Caso; onCaso: (id: CasoId) => void }

export function Hero({ caso, onCaso }: Props) {
  return (
    <section className="pt-10 sm:pt-16" aria-labelledby="titulo">
      <h1 id="titulo" className="text-[clamp(30px,6.2vw,92px)]">
        <span className="line"><span>Detector de conteúdo</span></span>
        <span className="line"><span>gerado por IA</span></span>
      </h1>

      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="after-title lg:col-span-4">
          <p className="max-w-[44ch] text-[18px] leading-[1.5] sm:text-[20px]">
            Envie uma imagem ou um vídeo: um ensemble de modelos roda na sua GPU e devolve um score de 0 a 100%,
            com ELA, espectro de frequência e GradCAM para conferir o resultado.
          </p>
          <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={REPO} className="btn">Ver o código no GitHub</a>
            <a href="#rodar" className="link">Como rodar</a>
          </p>

          <fieldset className="mt-10 lg:mt-14">
            <legend className="text-[15px] text-muted">Escolha a imagem analisada</legend>
            <div className="mt-3 flex gap-2">
              {Object.values(CASOS).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={c.id === caso.id}
                  onClick={() => onCaso(c.id)}
                  className="flex min-h-12 items-center gap-3 bg-field py-2 pl-2 pr-4 text-left transition-colors hover:bg-[#e8e8ea] active:translate-y-px aria-pressed:bg-ink aria-pressed:text-white"
                >
                  <img src={`/shots/${c.id}-original.webp`} alt="" width={28} height={42} className="h-[42px] w-[28px] object-cover" />
                  <span>
                    <span className="block font-semibold">{c.nome}</span>
                    <span className="block text-[15px] tabular-nums">{c.score}%</span>
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <figure className="lg:col-span-8" data-ui>
          <img
            key={caso.id}
            src={`/shots/${caso.id}-resultado.webp`}
            width={865}
            height={500}
            alt={`Tela de resultado do detector para ${caso.artigo}: medidor em ${caso.score}%, ${caso.veredito}. Scores por modelo: ${caso.scores}.`}
            className="swap h-auto w-full bg-[#141416]"
          />
          <figcaption className="mt-4 flex items-start gap-4 text-[15px] text-muted">
            <img
              key={`${caso.id}-original`}
              src={`/shots/${caso.id}-original.webp`}
              width={60}
              height={90}
              alt={caso.altOriginal}
              className="swap h-[90px] w-[60px] object-cover"
            />
            <span aria-live="polite">
              <span className="block font-semibold text-ink">{caso.nome}: {caso.score}%, {caso.veredito}</span>
              Score bruto {caso.bruto}, calibrado {caso.calibrado}. Tela real do app rodando numa RTX 2070 SUPER.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
