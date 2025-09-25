# Marina Cabo Advogados

Site profissional da advogada Marina Cabo, especialista em Direito de Família, Trabalho e Previdenciário.

## 🚀 Deploy para GitHub Pages

Este projeto está configurado para ser publicado como GitHub Page no repositório `gasmoraissza-lang`.

### Configuração

1. **Repositório**: `gasmoraissza-lang`
2. **URL**: `https://gasmoraissza-lang.github.io/gasmoraissza-lang/`
3. **Branch**: `gh-pages` (criada automaticamente)

### Como fazer o deploy

#### Opção 1: Deploy Automático (Recomendado)
1. Faça push para a branch `main`
2. O GitHub Actions fará o deploy automaticamente

#### Opção 2: Deploy Manual
```bash
npm run deploy
```

### Configurações do Next.js

- **output**: `export` (estático)
- **basePath**: `/gasmoraissza-lang`
- **assetPrefix**: `/gasmoraissza-lang`
- **images**: `unoptimized: true`

### Estrutura do Projeto

```
src/
├── app/[locale]/          # Páginas com internacionalização
├── components/            # Componentes reutilizáveis
├── sections/             # Seções da página
└── utils/                # Utilitários e traduções
```

### Tecnologias

- **Next.js 15** com App Router
- **TypeScript**
- **Tailwind CSS**
- **MDX** para blog posts
- **i18next** para internacionalização

### Scripts Disponíveis

- `npm run dev` - Desenvolvimento
- `npm run build` - Build de produção
- `npm run export` - Export estático
- `npm run deploy` - Deploy para GitHub Pages
