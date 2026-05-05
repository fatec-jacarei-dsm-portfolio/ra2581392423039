# ✅ TESTE CHECKLIST DO PORTFÓLIO

Execute este checklist após abrir o `index.html` para garantir que tudo funciona corretamente.

---

## 🎨 VISUAL & LAYOUT

- [ ] Page carrega sem erros no console
- [ ] Layout está responsivo (redimensione a janela)
- [ ] Header está colorido com degradado
- [ ] Cards de seções têm sombra e espaçamento
- [ ] Footer está no final da página

---

## 🌙 DARK MODE

- [ ] Botão dark mode (lua) aparece no canto superior direito
- [ ] Clique no botão alterna tema (lua → sol → lua)
- [ ] Background muda de claro para escuro
- [ ] Textos ficam legíveis em ambos temas
- [ ] Preferência persiste após recarregar a página
- [ ] Detecta preferência do sistema na primeira abertura

---

## 📝 FORMULÁRIO DE CONTATO

### Abrir Modal
- [ ] Clique em "Vamos Trabalhar Juntos!" abre modal
- [ ] Clique em "Me Contrate!" abre modal
- [ ] Modal aparece centralizado com overlay

### Fechar Modal
- [ ] Clique no "X" fecha modal
- [ ] Clique fora do modal (overlay) fecha
- [ ] Pressione ESC fecha modal

### Validação de Campos
- [ ] Tentar enviar sem preencher mostra erro (HTML5)
- [ ] Campo email valida formato (xxx@xxx.xxx)
- [ ] Todos os campos são obrigatórios
- [ ] Placeholders aparecem nos inputs

### Envio de Formulário
- [ ] Preencha todos os campos
- [ ] Clique em "Enviar Mensagem"
- [ ] Botão muda para "Enviando..." (desabilitado)
- [ ] Após 1 segundo, mensagem de sucesso aparece
- [ ] Formulário é limpo automaticamente
- [ ] Modal fecha após 3 segundos
- [ ] Mensagem de erro aparece se houver problema

---

## 🎯 BOTÕES & LINKS

### Botões CTA
- [ ] "Vamos Trabalhar Juntos!" abre modal
- [ ] "Me Contrate!" abre modal
- [ ] Botões têm efeito hover (elevam)
- [ ] Botões têm efeito active (pressionado)

### Links de Contato (Header)
- [ ] Email abre cliente de email
- [ ] Telefone abre discador (em mobile)
- [ ] LinkedIn abre em nova aba
- [ ] GitHub abre em nova aba
- [ ] Links têm hover efeito

### Links de Rodapé
- [ ] Email abre cliente de email
- [ ] LinkedIn abre em nova aba
- [ ] GitHub abre em nova aba

---

## 🖼️ IMAGENS DOS PROJETOS

- [ ] Cada projeto tem um ícone placeholder (📡, 🔥, 📚)
- [ ] Clique na imagem abre seletor de arquivo
- [ ] Selecione uma imagem local
- [ ] Imagem aparece no container com efeito fade
- [ ] Placeholder desaparece

---

## ✨ ANIMAÇÕES

- [ ] Header faz fade-in ao carregar
- [ ] Seções aparecem com animação ao scroll
- [ ] Badges têm efeito hover (sobem)
- [ ] Cards têm efeito hover (sobem e sombra)
- [ ] Links têm transições suaves
- [ ] Modal aparece com slide-up

---

## ♿ ACESSIBILIDADE

- [ ] Tab navega por todos os elementos
- [ ] Enter ativa botões
- [ ] ESC fecha modal
- [ ] Leitores de tela leem aria-labels
- [ ] Botão dark mode tem aria-label
- [ ] Links externos têm aria-label

---

## 📱 RESPONSIVIDADE

### Desktop (1920px)
- [ ] Layout com 3 colunas de skills
- [ ] Projeto header em 2 colunas
- [ ] Menu em linha horizontal

### Tablet (768px)
- [ ] Layout com 2 colunas de skills
- [ ] Espaçamento adequado
- [ ] Botões clicáveis

### Mobile (375px)
- [ ] Layout com 1 coluna
- [ ] Fontes legíveis
- [ ] Botões grandes o suficiente
- [ ] Modal ocupa 95% da largura
- [ ] Dark mode toggle acessível

---

## 🔗 SEO & META

- [ ] Título da página aparece na aba (Vinícius Lemes)
- [ ] Meta description aparece em buscadores
- [ ] URL amigável (index.html)
- [ ] Estrutura semântica está correta

---

## 🎓 CONTEÚDO

- [ ] Todas as seções estão visíveis
- [ ] Texto está bem formatado
- [ ] Emojis aparecem corretamente
- [ ] Links internos funcionam (âncoras)

---

## 💻 PERFORMANCE

- [ ] Page carrega em < 2 segundos
- [ ] Sem console errors
- [ ] Sem console warnings críticos
- [ ] Animações são suaves (60fps)

---

## 🗂️ ARQUIVOS

Verifique a estrutura:
```
✅ index.html (existe e é referenciado)
✅ css/styles.css (existe e é carregado)
✅ js/script.js (existe e é carregado)
✅ README.md (documentação)
✅ STRUCTURE.md (estrutura)
```

---

## 📊 TESTE DE DARK MODE PERSISTÊNCIA

1. Abra o portfólio
2. Clique em dark mode (lua → sol)
3. Recarregue a página (F5)
4. ✅ Dark mode deve continuar ativo
5. Abra DevTools → Application → LocalStorage
6. ✅ Deve haver chave `darkMode` com valor `true`

---

## 🐛 RELATÓRIO DE BUGS (Se Encontrar)

Encontrou um problema? Anote aqui:

| Comportamento | Esperado | Ação |
|---|---|---|
| | | |
| | | |

---

## ✅ RESULTADO FINAL

Se todos os itens acima forem ✅, seu portfólio está **100% funcional** e pronto para uso!

**Parabéns! 🎉**

---

**Data do Teste**: _______________
**Testado em**: Desktop / Tablet / Mobile
**Navegador**: Chrome / Firefox / Safari / Edge
