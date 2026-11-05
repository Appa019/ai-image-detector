import { REPO } from '../casos'

const COMANDOS = `git clone https://github.com/Appa019/ai-image-detector.git
cd ai-image-detector
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m utils.download_models
cd frontend && npm install && cd ..

uvicorn api:app --port 8001
# em outro terminal
cd frontend && npm run dev`

export function Rodar() {
  return (
    <section id="rodar" className="mt-40 grid gap-12 lg:grid-cols-12 lg:gap-10" aria-labelledby="rodar-titulo">
      <div className="reveal lg:col-span-5">
        <h2 id="rodar-titulo" className="text-[clamp(28px,3.6vw,52px)]">Rodar na sua máquina</h2>
        <p className="mt-6 max-w-[42ch]">
          Não há demo online: os modelos precisam de GPU. Você precisa de uma placa NVIDIA com CUDA (testado numa RTX
          2070 SUPER de 8 GB), 16 GB de RAM, cerca de 13 GB de disco para os modelos, Python 3.10+ e Node 18+.
        </p>
        <p className="mt-4 max-w-[42ch]">
          O app abre em localhost:5173. A API (FastAPI) também aceita chamadas diretas, com documentação em /docs.
        </p>
        <p className="mt-10">
          <a href={REPO} className="btn">Ver o código no GitHub</a>
        </p>
      </div>
      <pre
        className="reveal self-start overflow-x-auto bg-field p-5 font-mono text-[14px] sm:p-6 sm:text-[15px] leading-[1.7] lg:col-span-7"
        style={{ ['--d' as string]: '90ms' }}
        tabIndex={0}
        aria-label="Comandos de instalação"
      >
        <code>{COMANDOS}</code>
      </pre>
    </section>
  )
}
