import type { Caso } from '../casos'

export function Score({ caso }: { caso: Caso }) {
  const passos = [
    ['Cada modelo dá a sua probabilidade', `Para ${caso.artigo}: ${caso.scores}.`],
    [
      'O ensemble combina',
      `Um meta-learner (GradientBoosting) quando há dados de calibração, ou média ponderada. Score bruto: ${caso.bruto}.`,
    ],
    ['A calibração ajusta', `Regressão isotônica treinada com dados próprios, ou temperature scaling. Calibrado: ${caso.calibrado}.`],
    ['Sai o veredito', `${caso.score}%, ${caso.veredito}, com as análises forenses ao lado.`],
  ]

  return (
    <section className="mt-40" aria-labelledby="score">
      <div className="reveal flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
        <h2 id="score" className="text-[clamp(28px,3.6vw,52px)]">Como o número é calculado</h2>
        <p className="text-muted" aria-live="polite">Valores da imagem escolhida no topo: {caso.nome.toLowerCase()}.</p>
      </div>
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {passos.map(([titulo, texto], i) => (
          <li key={titulo} className="reveal" style={{ ['--d' as string]: `${i * 80}ms` }}>
            <h3 className="text-[26px]">{titulo}</h3>
            <p className="mt-4">{texto}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
