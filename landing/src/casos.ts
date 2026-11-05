export const REPO = 'https://github.com/Appa019/ai-image-detector'

// Real runs of the app, read from the screenshots in public/shots.
export type CasoId = 'retrato' | 'praia'

export type Caso = {
  id: CasoId
  nome: string
  artigo: string
  score: number
  bruto: string
  calibrado: string
  veredito: string
  scores: string
  altOriginal: string
}

export const CASOS: Record<CasoId, Caso> = {
  retrato: {
    id: 'retrato',
    nome: 'Retrato',
    artigo: 'o retrato',
    score: 73,
    bruto: '81,4%',
    calibrado: '72,8%',
    veredito: 'provavelmente IA',
    scores: 'SigLIP 100%, SDXL Detector 98%, ViT espacial 77%, AI Image Detector 66% e analisador de frequência 57%',
    altOriginal: 'Retrato de uma mulher com coroa de flores e roupa tradicional, entre flores cor-de-rosa',
  },
  praia: {
    id: 'praia',
    nome: 'Praia',
    artigo: 'a foto da praia',
    score: 37,
    bruto: '30,8%',
    calibrado: '36,8%',
    veredito: 'possivelmente real',
    scores: 'ViT espacial 57%, analisador de frequência 57%, AI Image Detector 49%, SigLIP 0% e SDXL Detector 0%',
    altOriginal: 'Praia com coqueiros, céu azul com nuvens e uma onda quebrando em primeiro plano',
  },
}
