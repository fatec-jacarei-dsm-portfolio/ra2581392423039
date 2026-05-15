# 🎨 Guia de Design UX Estilo Rocketseat

Este é um design system moderno e profissional baseado na identidade visual de empresas tech como a Rocketseat.

## 📋 Índice
1. [Cores](#cores)
2. [Tipografia](#tipografia)
3. [Componentes](#componentes)
4. [Como Usar](#como-usar)
5. [Customização](#customização)

---

## 🎯 Cores

### Palette Principal
```css
--bg-primary: #0f0f0f;        /* Fundo escuro principal */
--bg-secondary: #1a1a1a;      /* Fundo secundário */
--bg-tertiary: #2a2a2a;       /* Fundo terciário */

--accent-green: #00d081;      /* Verde neon (principal) */
--accent-purple: #8257e5;     /* Roxo (detalques) */
--accent-blue: #5e5cff;       /* Azul (alternativo) */

--text-primary: #ffffff;      /* Texto principal */
--text-secondary: #b0b0b0;    /* Texto secundário */
--text-tertiary: #808080;     /* Texto terciário */
```

### Cores Semânticas
- **Sucesso**: `#00d081` (verde)
- **Erro**: `#ff6b6b` (vermelho)
- **Aviso**: `#ffd93d` (amarelo)
- **Info**: `#5e5cff` (azul)

---

## 🔤 Tipografia

### Fontes Recomendadas
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Sans-serif**: `Inter` (corpo, títulos)
- **Monospace**: `JetBrains Mono` (código)

### Tamanhos
- **H1**: 3.5rem (hero)
- **H2**: 2rem (seções)
- **H3**: 1.2rem (subtítulos)
- **Body**: 1.05rem (conteúdo)
- **Small**: 0.85rem (labels)

---

## 🧩 Componentes

### Botões

#### Botão Primário (Verde)
```html
<a href="#" class="btn btn-primary">Vamos Conversar</a>
```
```css
.btn-primary {
    background-color: var(--accent-green);
    color: var(--bg-primary);
}
.btn-primary:hover {
    background-color: #00b870;
    transform: translateY(-2px);
}
```

#### Botão Secundário (Transparente)
```html
<a href="#" class="btn btn-secondary">Ver Mais</a>
```
```css
.btn-secondary {
    background-color: transparent;
    color: var(--accent-green);
    border: 2px solid var(--accent-green);
}
```

### Cards/Seções
```html
<section class="section">
    <div class="section-header">
        <h2>Título da Seção</h2>
        <div class="section-line"></div>
    </div>
    <!-- conteúdo -->
</section>
```

### Skill Tags
```html
<span class="skill-tag">JavaScript</span>
<span class="skill-tag">React</span>
```

### Links Sociais
```html
<a href="#" class="social-link">
    <svg><!-- icon --></svg>
</a>
```

---

## 🚀 Como Usar

### Opção 1: Copiar os Arquivos Completos
```
/docs
  /css
    styles.css          <!-- CSS principal -->
  /js
    script.js           <!-- JavaScript interatividade -->
  index.html            <!-- Template HTML -->
```

### Opção 2: Usar Apenas o CSS
1. Copie o arquivo `styles.css` para seu projeto
2. Link no seu HTML:
```html
<link rel="stylesheet" href="caminho/para/styles.css">
```

### Opção 3: Integrar em Framework
Se está usando **React**, **Vue** ou **Next.js**:

```javascript
// Importe o CSS
import '../styles/rocketseat.css';

// Use as classes no JSX
<button className="btn btn-primary">Click me</button>
```

---

## 🎨 Customização

### Mudar Cores Principais
Edite as variáveis CSS no root:

```css
:root {
    --accent-green: #00ff00;      /* Sua cor aqui */
    --accent-purple: #aa00ff;     /* Sua cor aqui */
    --text-primary: #ffffff;      /* Sua cor aqui */
}
```

### Mudar Tipografia
```css
body {
    font-family: 'Sua Font', sans-serif;
}

code, pre {
    font-family: 'Sua Mono Font', monospace;
}
```

### Ajustar Espaçamento
```css
:root {
    --spacing-sm: 1rem;      /* Modificar valores aqui */
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
}
```

---

## 📱 Responsive Design

O design é **mobile-first** e responde automaticamente:

- **Desktop**: Layout completo (≥ 1200px)
- **Tablet**: Layout adaptado (768px - 1199px)
- **Mobile**: Layout colapsado (< 768px)

Breakpoints:
```css
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 480px) { /* Mobile */ }
```

---

## ✨ Animações

O design inclui animações CSS suaves:

- `fadeIn` - Efeito de aparição
- `slideInUp` - Desliza de baixo para cima
- `slideInLeft` - Desliza da esquerda
- `pulse` - Pulsação
- `glow` - Efeito luminoso

Use assim:
```css
.seu-elemento {
    animation: slideInUp 0.5s ease-out;
}
```

---

## 🔄 Transições

Transições suaves predefinidas:
```css
--transition-fast: 200ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;
```

---

## 📦 Estrutura Recomendada para Novo Projeto

```
seu-projeto/
├── index.html
├── css/
│   └── styles.css           (copie do projeto)
├── js/
│   └── script.js            (copie do projeto)
└── assets/
    ├── images/
    └── icons/
```

---

## 🎯 Casos de Uso Ideais

Este design funciona bem para:
- ✅ Portfólios profissionais
- ✅ Sites de agências tech
- ✅ Landing pages
- ✅ Dashboards
- ✅ Blogs técnicos
- ✅ SaaS products

---

## 💡 Dicas de Uso

1. **Mantenha o Contraste**: Use o verde sobre fundo escuro para boa legibilidade
2. **Animações Subtis**: As animações devem ser discretas, não agressivas
3. **Espaçamento**: Use as variáveis de espaçamento para consistência
4. **Hover States**: Sempre inclua efeitos hover para feedback visual
5. **Acessibilidade**: Mantenha WCAG AA (contrast ratio mínimo 4.5:1)

---

## 📄 Licença

Este design system está livre para ser usado em projetos pessoais e comerciais.

---

## 🔗 Recursos Adicionais

- [Documentação CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Google Fonts](https://fonts.google.com/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

---

**Criado em 2026 | Baseado em padrões Rocketseat**
