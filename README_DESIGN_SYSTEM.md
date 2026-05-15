# 🎨 Rocketseat Design System - Kit Completo

Este é um design system completo baseado na identidade visual de empresas tech como a Rocketseat. Perfeito para criar portfólios, landing pages, sites e aplicações web modernas e profissionais.

## 📦 Conteúdo do Pacote

```
├── docs/
│   ├── css/
│   │   └── styles.css              ✅ CSS Principal (Completo)
│   ├── js/
│   │   └── script.js               ✅ JavaScript Interatividade
│   └── index.html                  ✅ Exemplo de Portfólio
│
├── ROCKETSEAT_DESIGN_GUIDE.md      📖 Guia de Design (Documentação)
├── TEMPLATE_ROCKETSEAT.html        🎯 Template HTML Básico
├── ROCKETSEAT_COMPONENTES.css      🧩 Componentes Extras
└── README.md                        📋 Este arquivo
```

---

## 🚀 Quick Start

### Opção 1: Usar o Exemplo Completo
1. Abra `docs/index.html` no seu navegador
2. Veja funcionando!
3. Copie toda a pasta `docs/` para seu projeto

### Opção 2: Começar do Zero com Template
1. Use o `TEMPLATE_ROCKETSEAT.html` como ponto de partida
2. Copie `docs/css/styles.css` para seu projeto
3. Copie `docs/js/script.js` para seu projeto
4. Customize com suas cores e conteúdo

### Opção 3: Integrar em Projeto Existente
1. Copie apenas o `styles.css` para seu projeto
2. Link no seu HTML: `<link rel="stylesheet" href="path/to/styles.css">`
3. Use as classes nos seus elementos

---

## 📁 Estrutura Recomendada

Para seu novo projeto:

```
seu-projeto/
├── index.html
├── css/
│   ├── styles.css           (copie de docs/css/)
│   └── custom.css           (suas customizações)
├── js/
│   ├── script.js            (copie de docs/js/)
│   └── custom.js            (seu JavaScript)
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   └── projects/
│   ├── icons/
│   │   └── (seus ícones)
│   └── fonts/               (se customizar tipografia)
└── README.md
```

---

## 🎨 Sistema de Cores

As cores estão definidas como variáveis CSS no `:root`:

```css
/* Cores Principais */
--bg-primary: #0f0f0f;        /* Fundo escuro */
--accent-green: #00d081;      /* Verde neon (principal) */
--accent-purple: #8257e5;     /* Roxo */
--accent-blue: #5e5cff;       /* Azul */

/* Textos */
--text-primary: #ffffff;      /* Branco */
--text-secondary: #b0b0b0;    /* Cinza claro */
--text-tertiary: #808080;     /* Cinza escuro */
```

### Como Customizar Cores

Edite no seu arquivo CSS:

```css
:root {
    --accent-green: #00ff00;    /* Sua cor aqui */
    --accent-purple: #ff00ff;   /* Sua cor aqui */
}
```

Todas as cores do site serão atualizadas automaticamente!

---

## 🧩 Componentes Disponíveis

### Buttons
```html
<a href="#" class="btn btn-primary">Botão Primário</a>
<a href="#" class="btn btn-secondary">Botão Secundário</a>
<a href="#" class="btn btn-primary btn-large">Botão Grande</a>
```

### Sections
```html
<section class="section">
    <div class="section-header">
        <h2>Título</h2>
        <div class="section-line"></div>
    </div>
    <!-- conteúdo -->
</section>
```

### Skills / Tags
```html
<span class="skill-tag">JavaScript</span>
<span class="skill-tag">React</span>
```

### Project Cards
```html
<article class="project-card">
    <div class="project-top">
        <h3>Nome do Projeto</h3>
        <span class="project-period">2024</span>
    </div>
    <p class="project-role">Seu papel</p>
    <ul class="project-highlights">
        <li>Destaque 1</li>
    </ul>
    <div class="project-tags">
        <span>Tag</span>
    </div>
</article>
```

### Social Links
```html
<a href="#" class="social-link">
    <svg><!-- ícone --></svg>
</a>
```

---

## 📚 Componentes Extras

Veja `ROCKETSEAT_COMPONENTES.css` para mais exemplos de:
- ✅ Tabelas
- ✅ Alertas e Badges
- ✅ Cards com Borda Decorativa
- ✅ Listas com Ícones
- ✅ Progress Bars
- ✅ Breadcrumbs
- ✅ Tooltips
- ✅ Tabs / Abas
- ✅ Código e Blockquotes
- ✅ Utilities (grid, flexbox, spacing, etc)

---

## ✨ Animações Disponíveis

O CSS inclui várias animações prontas:

```css
@keyframes fadeIn { }        /* Aparecer */
@keyframes slideInUp { }     /* Deslizar de baixo */
@keyframes slideInLeft { }   /* Deslizar da esquerda */
@keyframes pulse { }         /* Pulsação */
@keyframes glow { }          /* Efeito luminoso */
```

Use assim:
```css
.seu-elemento {
    animation: slideInUp 0.5s ease-out;
}
```

---

## 📱 Responsividade

O design é **mobile-first** e responde em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

Breakpoints predefinidos:
```css
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 480px) { /* Mobile */ }
```

---

## 🔧 Customização Avançada

### Mudar Tipografia

```css
body {
    font-family: 'Sua Font', sans-serif;
}

code, pre {
    font-family: 'Sua Mono Font', monospace;
}
```

### Mudar Espaçamento

```css
:root {
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
}
```

### Mudar Velocidade de Animações

```css
:root {
    --transition-fast: 100ms ease;    /* Mais rápido */
    --transition-base: 300ms ease;
    --transition-slow: 800ms ease;    /* Mais lento */
}
```

---

## 📖 Documentação Completa

Veja `ROCKETSEAT_DESIGN_GUIDE.md` para:
- Palette de cores detalhada
- Tamanhos de tipografia
- Casos de uso ideais
- Dicas de acessibilidade
- Links para recursos

---

## 🎯 Casos de Uso

Este design funciona perfeitamente para:

- ✅ **Portfólios** - Showcase de trabalhos e projetos
- ✅ **Landing Pages** - Apresentação de produto/serviço
- ✅ **Blogs Técnicos** - Sites de conteúdo
- ✅ **Agências** - Apresentação de agência tech
- ✅ **SaaS** - Websites de SaaS products
- ✅ **Dashboards** - Aplicações web internas
- ✅ **Documentação** - Sites de docs/API

---

## 💡 Dicas de Uso

1. **Mantenha o Contraste**: Verde sobre preto = ótima legibilidade ✅
2. **Não Abuses de Efeitos**: Animações devem ser subtis
3. **Use Espaçamento**: Não aperte demais os elementos
4. **Teste em Mobile**: Sempre verifique em celular
5. **Acessibilidade**: Respeite WCAG AA (contrast mínimo 4.5:1)

---

## 🛠️ Stack Tecnológico

- ✅ HTML5 semântico
- ✅ CSS3 com CSS Variables
- ✅ JavaScript vanilla (sem dependências)
- ✅ Flexbox e Grid
- ✅ Media Queries
- ✅ SVG icons
- ✅ Google Fonts

---

## 📦 Tamanho dos Arquivos

- `styles.css` ≈ 25 KB
- `script.js` ≈ 3 KB
- **Total ≈ 28 KB** (muito leve! 🚀)

---

## 🌐 Navegador Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🎨 Exemplos de Projetos

Este design foi usado em:
- Portfólio de Vinícius Lemes (dev.vinicioeslemes.com - exemplo)
- Múltiplas landing pages tech
- Blogs e documentação

---

## 📄 Licença

Livre para uso pessoal e comercial ✅

---

## 🤝 Sugestões

Se tiver sugestões de novos componentes ou melhorias, aproveite e customize!

Este design foi criado para ser flexível e fácil de adaptar.

---

## 🔗 Recursos Externos

- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

**Criado em 2026 | Baseado em padrões Rocketseat**

Boa sorte com seu próximo projeto! 🚀

