# 🚀 QUICK START - GUIA RÁPIDO

Bem-vindo! Este guia te ajudará a começar a usar seu portfólio em 2 minutos.

---

## 1️⃣ ABRIR O PORTFÓLIO

### Opção A: Direto no Navegador
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

### Opção B: Servidor Local (Recomendado)

**Python 3:**
```bash
python -m http.server 8000
# Abra: http://localhost:8000
```

**Node.js:**
```bash
npx http-server
# Abra: http://localhost:8080
```

**PHP:**
```bash
php -S localhost:8000
# Abra: http://localhost:8000
```

---

## 2️⃣ ESTRUTURA DO PROJETO

```
Portifolio-2/
├── index.html          ← Arquivo principal (ABRA ESTE)
├── css/styles.css      ← Todos os estilos
├── js/script.js        ← Toda lógica/interatividade
├── assets/             ← Para imagens (futuro)
├── README.md           ← Documentação completa
├── STRUCTURE.md        ← Explicação da estrutura
└── TEST_CHECKLIST.md   ← Teste funcionalidades
```

---

## 3️⃣ EDITAR CONTEÚDO

### Alterar Informações Pessoais
Edite em `index.html`:
```html
<h1>Seu Nome Aqui</h1>
<p class="title-tag">Seu Título | Sua Instituição</p>
<span>📍 Sua Cidade</span>
<a href="mailto:seu.email@exemplo.com">✉️ seu.email@exemplo.com</a>
```

### Alterar Cores
Edite em `css/styles.css`:
```css
:root {
    --primary: #0f172a;      /* Azul escuro → Mude aqui */
    --secondary: #1e40af;    /* Azul claro */
    --accent: #3b82f6;       /* Cor destaque */
    /* ... */
}
```

### Adicionar Novo Projeto
Copie em `index.html`:
```html
<div class="project-item">
    <div class="project-image-container">
        <div class="project-image-placeholder">
            🎯 <!-- Mude o emoji -->
            <p>Clique para adicionar imagem</p>
        </div>
    </div>
    <div class="project-header">
        <span class="project-name">Seu Projeto</span>
        <span class="project-date">Data</span>
    </div>
    <span class="project-role">Seu Papel</span>
    <ul class="project-list">
        <li>Responsabilidade 1</li>
        <li>Responsabilidade 2</li>
    </ul>
</div>
```

### Adicionar Skill
Edite em `index.html`:
```html
<span class="badge">Sua Skill <span class="skill-level">★★★★★</span></span>
```

---

## 4️⃣ TESTAR FUNCIONALIDADES

Abra `TEST_CHECKLIST.md` e marque os testes conforme você usa o portfólio.

### Principais Funcionalidades:
- ✅ Dark mode (clique no 🌙 canto superior direito)
- ✅ Formulário de contato (clique em "Vamos Trabalhar Juntos!")
- ✅ Upload de imagens (clique no ícone do projeto)
- ✅ Responsivo (redimensione a janela)

---

## 5️⃣ INTEGRAR EMAIL REAL (Opcional)

Atualmente, o formulário simula envio. Para emails reais:

### Opção A: EmailJS (Recomendado - Gratuito)
1. Acesse [EmailJS.com](https://www.emailjs.com)
2. Crie uma conta
3. Copie seu `PUBLIC_KEY`
4. Edite `js/script.js` e procure por "Form submission"
5. Adicione código EmailJS

### Opção B: Backend Próprio
Crie um servidor Node.js com Express + Nodemailer

### Opção C: Serviço Externo
Use [Formspree](https://formspree.io/) ou [Basin](https://usebasin.com/)

---

## 6️⃣ DEPLOY (Publicar Online)

### Opção A: GitHub Pages (Gratuito)
```bash
# 1. Crie repositório
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# 2. Acesse settings → Pages → Deploy from main
# Seu site estará em: https://usuario.github.io/repo
```

### Opção B: Netlify (Gratuito + Fácil)
1. Acesse [Netlify.com](https://www.netlify.com)
2. Arraste a pasta `Portifolio-2` para publicar
3. Seu site estará online em minutos

### Opção C: Vercel (Gratuito)
1. Acesse [Vercel.com](https://vercel.com)
2. Conecte repositório GitHub
3. Deploy automático

---

## 7️⃣ PRÓXIMOS PASSOS

1. ✅ Personalize com suas informações
2. ✅ Teste todas as funcionalidades (veja TEST_CHECKLIST.md)
3. ✅ Adicione seus projetos
4. ✅ Teste em mobile (F12 → Toggle device toolbar)
5. ✅ Integre email real se precisar
6. ✅ Deploy para o mundo ver!

---

## ❓ DÚVIDAS?

- Leia `README.md` para documentação completa
- Veja `STRUCTURE.md` para entender a arquitetura
- Verifique `TEST_CHECKLIST.md` para testes

---

## 💡 DICAS RÁPIDAS

| Ação | Como Fazer |
|------|-----------|
| Mudar cor primária | Edite `:root { --primary: #novaCorAqui }` em `css/styles.css` |
| Adicionar projeto | Copie `<div class="project-item">` em `index.html` |
| Dark mode automático | Já detecta preferência do sistema |
| Formulário funcional | EmailJS integrado (veja passo 5️⃣) |
| Responsivo | Funciona em mobile sem alterações |
| Publicar online | GitHub Pages, Netlify ou Vercel |

---

## 🎉 BOA SORTE!

Seu portfólio está pronto e profissional. Agora é hora de impressionar!

---

**Última atualização**: Maio 2026
**Versão**: 2.0 (Profissional + Estruturado)
