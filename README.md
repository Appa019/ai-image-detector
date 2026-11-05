# Detector de Conteúdo Gerado por IA

Landing page: [detector-ia-landing.vercel.app](https://detector-ia-landing.vercel.app/)

Sistema de detecção de imagens e vídeos gerados por inteligência artificial, utilizando um ensemble de modelos de Deep Learning e Machine Learning. Fornece um score de confiança (0-100%) com análise forense detalhada e visualizações interativas.

## Instalação e uso

```bash
# 1. Clone o repositório
git clone https://github.com/Appa019/ai-image-detector.git
cd ai-image-detector

# 2. Crie o ambiente virtual e instale as dependências Python
python -m venv .venv
source .venv/bin/activate        # Linux/Mac
# .venv\Scripts\activate         # Windows

pip install -r requirements.txt

# 3. Baixe os modelos do HuggingFace Hub para models_cache/ (~12 GB, sendo ~6,9 GB do CLIP ViT-L/14)
python -m utils.download_models

# 4. Instale as dependências do frontend
cd frontend && npm install && cd ..

# 5. Inicie o backend e o frontend (em terminais separados)
uvicorn api:app --host 0.0.0.0 --port 8001
# em outro terminal:
cd frontend && npm run dev
```

Acesse `http://localhost:5173` no navegador. O Vite repassa as chamadas `/api` para `http://localhost:8001` (ver `frontend/vite.config.ts`), por isso o backend precisa rodar na porta 8001. A documentação interativa da API fica em `http://localhost:8001/docs`.

## Funcionalidades

- **Detecção de imagens** geradas por IA (Midjourney, Stable Diffusion, DALL-E, etc.)
- **Detecção de deepfakes** em vídeos com timeline frame a frame
- **Ensemble de modelos** com agregação por meta-learner (GradientBoosting) ou média ponderada
- **Análise forense**: GradCAM, FFT/DCT, ELA, wavelets, noise print, SRM kernels
- **Calibração de confiança** via Isotonic Regression ou Temperature Scaling
- **Extração de metadados EXIF** com indicadores automáticos de geração por IA
- **Interface web**: frontend React + API REST (FastAPI)
- **Otimizado para GPU**: modelos em FP16 com carregamento sequencial para economizar VRAM

## Arquitetura

```
┌────────────────────────────────────────────────────┐
│                     Interface                      │
│        React (frontend/) + FastAPI (api.py)        │
├────────────────────────────────────────────────────┤
│            Pipeline (core/pipeline.py)             │
│  Orquestra detecção sequencial + análise forense   │
├────────────────────────────────────────────────────┤
│            Ensemble (core/ensemble.py)             │
│       Meta-learner (GBM)  |  Média ponderada       │
├────────────────────────────────────────────────────┤
│                 Modelos (models/)                  │
│      ViT  |  SDXL Det  |  AI Image  |  SigLIP      │
│        FFT/DCT  |  EfficientNet-B4 (vídeo)         │
├────────────────────────────────────────────────────┤
│            Análise Forense (analysis/)             │
│   ELA | FFT | GradCAM | Wavelets | Pixels | EXIF   │
├────────────────────────────────────────────────────┤
│         GPU Manager (utils/gpu_manager.py)         │
│      VRAM tracking  |  FP16  |  Cache cleanup      │
└────────────────────────────────────────────────────┘
```

## Modelos do Ensemble

| Modelo | Arquitetura | VRAM (FP16) | Papel |
|--------|------------|-------------|-------|
| Deep Fake Detector v2 | ViT-base-patch16-224 | ~250 MB | Análise espacial de texturas e artefatos |
| SDXL Detector (Organika) | Fine-tuned SDXL classifier | ~1.7 GB | Especializado em modelos de difusão |
| AI Image Detector | ViT (Vision Transformer) | ~280 MB | Treinado em Midjourney/SD/DALL-E |
| SigLIP AI vs Human | SiglipForImageClassification | ~180 MB | Detector binário IA vs. humano |
| Analisador de Frequência | FFT/DCT + MLP | ~50 MB | Artefatos de frequência de GANs/difusão |
| EfficientNet-B4 | EfficientNet-B4 | ~150 MB | Deepfakes em vídeo (face swap) |

Modelos adicionais disponíveis (desabilitados por padrão em `config/model_registry.py`): CLIP ViT-L/14, DINOv2-Small, SigLIP2 3-Classes.

## Análises Forenses

- **GradCAM**: mapas de calor mostrando as regiões que influenciaram a decisão
- **Espectro FFT/DCT**: detecta padrões de frequência típicos de geradores
- **ELA (Error Level Analysis)**: identifica inconsistências de compressão JPEG
- **Wavelets**: análise multiescala de texturas e ruído
- **Noise Print**: visualiza padrões de ruído da imagem
- **SRM Kernels**: filtros de Steganalysis Rich Model para detecção de manipulação
- **Estatísticas de Pixels**: uniformidade, histograma RGB, inconsistências locais
- **Metadados EXIF**: extrai e analisa metadados com indicadores automáticos de IA

## Requisitos

### Hardware
- **GPU**: NVIDIA com suporte CUDA (testado em RTX 2070 SUPER 8GB)
- **RAM**: 16 GB recomendado
- **Disco**: ~13 GB para o cache dos modelos

### Software
- Python 3.10+
- CUDA 11.8+ e cuDNN
- Node.js 18+ (para o frontend React)

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/status` | Status da API, GPU e modelos |
| `GET` | `/api/modelos` | Lista modelos do ensemble |
| `POST` | `/api/analisar/imagem` | Analisa uma imagem (multipart) |
| `POST` | `/api/analisar/imagem/stream` | Análise com progresso via SSE |
| `POST` | `/api/analisar/video` | Analisa um vídeo (multipart) |

### Exemplo com cURL

```bash
curl -X POST http://localhost:8001/api/analisar/imagem \
  -F "arquivo=@foto.jpg"
```

## Estrutura do Projeto

```
├── api.py                    # API REST (FastAPI)
├── requirements.txt          # Dependências Python
├── config/
│   ├── settings.py           # Configurações globais
│   └── model_registry.py     # Registro de modelos do ensemble
├── core/
│   ├── pipeline.py           # Pipeline principal de detecção
│   ├── ensemble.py           # Agregação de scores (meta-learner + fallback)
│   └── confidence.py         # Calibração e intervalos de confiança
├── models/
│   ├── base.py               # Classe abstrata DetectorBase
│   ├── spatial_vit.py        # ViT Deep Fake Detector v2
│   ├── sdxl_detector.py      # SDXL Detector (Organika)
│   ├── ai_image_detector.py  # AI Image Detector (ViT)
│   ├── siglip_detector.py    # SigLIP AI vs Human
│   ├── frequency_analyzer.py # Analisador FFT/DCT
│   ├── efficientnet_detector.py # EfficientNet-B4 (vídeo)
│   ├── clip_detector.py      # CLIP UniversalFakeDetect
│   ├── dinov2_detector.py    # DINOv2-Small
│   └── siglip2_detector.py   # SigLIP2 3-Classes
├── analysis/
│   ├── ela.py                # Error Level Analysis
│   ├── frequency.py          # Análise espectral FFT/DCT
│   ├── gradcam.py            # GradCAM para mapas de calor
│   ├── metadata.py           # Extração EXIF e indicadores de IA
│   ├── pixel_stats.py        # Estatísticas de pixels e noise print
│   ├── srm_kernels.py        # Steganalysis Rich Model kernels
│   └── wavelet.py            # Análise wavelet multiescala
├── processing/
│   ├── image_processor.py    # Pré-processamento de imagens
│   ├── video_processor.py    # Extração de frames de vídeo
│   └── face_detector.py      # Detecção facial (MTCNN)
├── visualization/
│   ├── charts.py             # Gráficos Plotly interativos
│   ├── heatmaps.py           # Heatmaps Matplotlib
│   └── video_timeline.py     # Timeline de análise de vídeo
├── utils/
│   ├── gpu_manager.py        # Gerenciamento de VRAM
│   ├── download_models.py    # Download de modelos do HuggingFace
│   └── treinar_calibracao.py # Script de treino do calibrador
├── frontend/                 # Frontend React + TypeScript
│   ├── src/
│   │   ├── App.tsx
│   │   ├── api.ts            # Cliente da API
│   │   └── components/       # Componentes React
│   ├── package.json
│   └── vite.config.ts
└── tests/
    ├── test_ensemble.py
    ├── test_frequency.py
    ├── test_models.py
    └── test_pipeline.py
```

## Calibração e Fine-tuning

O sistema suporta calibração com dados próprios. O dataset precisa ter as subpastas `real/` (fotos reais) e `ia/` (imagens geradas por IA):

```bash
python utils/treinar_calibracao.py --dataset_dir <caminho> [--epochs 10] [--batch_size 32]
```

Isso treina:
- **Cabeças lineares** do DINOv2 e do CLIP e o **MLP** do analisador de frequência
- **Meta-learner (GradientBoosting)** para stacking do ensemble
- **IsotonicRegression** para calibração de scores

Os artefatos são salvos em `models_cache/` (meta-learner em `models_cache/ensemble/`, calibrador em `models_cache/calibracao/`). Sem eles, o ensemble usa média ponderada e a calibração usa Temperature Scaling.

## Testes

```bash
pytest tests/
```

## Tecnologias

- **Backend**: Python, PyTorch, HuggingFace Transformers, FastAPI
- **Frontend**: React, TypeScript, Tailwind CSS, Recharts, Vite
- **Visualização**: Recharts (frontend), Matplotlib (heatmaps no backend)
- **Vídeo**: OpenCV, facenet-pytorch (MTCNN)
- **ML**: scikit-learn (calibração e meta-learner)
- **Análise de sinais**: NumPy, SciPy, PyWavelets

## Licença

MIT. Veja [LICENSE](LICENSE).
