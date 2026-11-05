// From README.md and config/model_registry.py.
const GRUPOS = [
  {
    nome: 'Imagem',
    modelos: [
      ['Deep Fake Detector v2', 'ViT-base: texturas e artefatos espaciais', '250 MB'],
      ['SDXL Detector', 'Classificador ajustado para modelos de difusão', '1,7 GB'],
      ['AI Image Detector', 'ViT treinado com Midjourney, SD e DALL-E', '280 MB'],
      ['SigLIP AI vs Human', 'Classificador binário IA ou humano', '180 MB'],
      ['Analisador de frequência', 'FFT/DCT com uma MLP', '50 MB'],
    ],
  },
  {
    nome: 'Vídeo',
    modelos: [['EfficientNet-B4', 'Deepfake com troca de rosto, frame a frame com MTCNN', '150 MB']],
  },
  {
    nome: 'Desligados por padrão',
    modelos: [
      ['CLIP ViT-L/14', 'UniversalFakeDetect', '1,7 GB'],
      ['DINOv2-Small', 'Cabeça linear treinável', '350 MB'],
      ['SigLIP2', 'Três classes', '180 MB'],
    ],
  },
]

export function Modelos() {
  return (
    <section className="mt-40 grid gap-12 lg:grid-cols-12 lg:gap-10" aria-labelledby="modelos">
      <div className="reveal lg:col-span-5">
        <h2 id="modelos" className="text-[clamp(28px,3.6vw,52px)]">Os modelos do ensemble</h2>
        <p className="mt-6 max-w-[42ch]">
          Seis ficam ligados: cinco para imagem e um para vídeo. Todos rodam em FP16 e são carregados um de cada vez,
          com a VRAM liberada entre eles, para caber numa placa de 8 GB.
        </p>
        <p className="mt-4 max-w-[42ch] text-muted">Valores de VRAM em FP16.</p>
      </div>

      <div className="lg:col-span-7">
        {GRUPOS.map((g, i) => (
          <div key={g.nome} className={`reveal ${i ? 'mt-10' : ''}`} style={{ ['--d' as string]: `${i * 80}ms` }}>
            <h3 className="text-[17px] font-normal tracking-normal text-muted">{g.nome}</h3>
            <ul className="mt-2">
              {g.modelos.map(([nome, papel, vram]) => (
                <li key={nome} className="grid grid-cols-[1fr_auto] gap-x-6 py-2">
                  <span>
                    <span className="font-semibold">{nome}</span>
                    <span className="block text-muted sm:inline sm:before:content-['_·_']">{papel}</span>
                  </span>
                  <span className="tabular-nums text-muted">{vram}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
