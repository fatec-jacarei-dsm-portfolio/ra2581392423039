# 🆘 GUIA DE TROUBLESHOOTING - Rocketseat Design System

Encontrou um problema? Procure aqui a solução!

---

## ⚠️ PROBLEMAS COMUNS

### 1. "O site não está respondendo ao clique do menu"

**Sintomas:**
- Menu mobile não abre ao clicar
- Hamburger animation não funciona

**Solução:**
```javascript
// Verifique se script.js está carregado
// No HTML, certifique-se que tem:
<script src="js/script.js"></script>

// Verifique se elemento está certo:
// <button id="nav-toggle" class="nav-toggle">
```

**Checklist:**
- [ ] Arquivo `js/script.js` existe?
- [ ] Script está linkado no HTML?
- [ ] ID do botão é `nav-toggle`?
- [ ] Classe da nav é `nav-menu`?

---

### 2. "As cores não estão mudando quando edito styles.css"

**Sintomas:**
- Mudou a cor mas nada aconteceu
- Cores antigas ainda aparecem

**Solução:**
```
1. Limpe cache do navegador:
   - Pressione Ctrl+Shift+Delete
   - Marque "Cached images and files"
   - Clique "Clear"

2. Hard refresh:
   - Pressione Ctrl+Shift+R (Chrome/Firefox)
   - Ou Command+Shift+R (Mac)

3. Edite as variáveis corretas:
   No :root { } procure por:
   --accent-green: #00d081;
```

**Checklist:**
- [ ] Limpei o cache?
- [ ] Fiz hard refresh (Ctrl+Shift+R)?
- [ ] Editei no lugar certo (:root)?
- [ ] Salvei o arquivo?

---

### 3. "Site não está responsivo em mobile"

**Sintomas:**
- Layout quebrado no celular
- Texto muito pequeno
- Elementos sobrepostos

**Solução:**
1. Adicione viewport meta tag no HTML:
```html
<meta name="viewport" 
      content="width=device-width, initial-scale=1.0">
```

2. Teste com DevTools:
```
F12 → Toggle device toolbar (Ctrl+Shift+M)
```

3. Verifique media queries em styles.css:
```css
@media (max-width: 768px) {
  /* Estilos para tablet */
}

@media (max-width: 480px) {
  /* Estilos para mobile */
}
```

**Checklist:**
- [ ] Viewport meta tag presente?
- [ ] Testar em F12 com device mode?
- [ ] Media queries estão presentes?
- [ ] CSS foi carregado corretamente?

---

### 4. "As animações não funcionam"

**Sintomas:**
- Elementos aparecem sem fade/slide
- Não tem efeito hover nos botões
- Scroll animations não acontecem

**Solução:**
```css
/* Verifique se @keyframes estão definidas */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInUp {
    from { transform: translateY(20px); }
    to { transform: translateY(0); }
}

/* Verifique se classes têm animation */
.section {
    animation: fadeIn 0.6s ease-in;
}
```

**Checklist:**
- [ ] CSS tem @keyframes?
- [ ] Classes têm animation property?
- [ ] JavaScript Intersection Observer funciona?
- [ ] Elementos têm classe certa?

---

### 5. "Fonts não estão carregando"

**Sintomas:**
- Texto parece diferente
- Font incorreta
- 404 error no console

**Solução:**
```html
<!-- Adicione no <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

**Checklist:**
- [ ] Links de font estão no <head>?
- [ ] Ordem está correta?
- [ ] Está usando 'display=swap'?
- [ ] Verificou console (F12)?

---

### 6. "Elementos estão fora do lugar"

**Sintomas:**
- Navbar sobrepõe conteúdo
- Elementos flutuam
- Layout quebrado

**Solução:**
```css
/* Verificar se tem posicionamento certo */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

/* Adicionar padding-top ao body */
body {
    padding-top: var(--spacing-lg);
}
```

**Checklist:**
- [ ] Navbar tem position fixed?
- [ ] Z-index está alto (1000+)?
- [ ] Body tem padding-top?
- [ ] Elementos têm margin certo?

---

### 7. "Performance está lenta"

**Sintomas:**
- Site demora carregar
- Scroll travando
- Animações lentas

**Solução:**
```javascript
// Otimize Intersection Observer
const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Comprima imagens
// Use: TinyPNG.com ou Squoosh.app

// Minimize CSS/JS em produção
```

**Checklist:**
- [ ] Imagens comprimidas?
- [ ] CSS/JS minificados?
- [ ] Observador configurado certo?
- [ ] Sem loops infinitos?

---

## 🔍 COMO DEBUGAR

### Ver erros no console
```
F12 → Console tab
Procure por erros vermelhos
Clique para ver detalhes
```

### Verificar elementos
```
F12 → Elements tab
Clique em elemento
Veja estilos aplicados
Altere para testar
```

### Performance
```
F12 → Performance tab
Aperte Record
Faça ações
Veja bottlenecks
```

### Network
```
F12 → Network tab
Recarregue a página
Veja o que carregou
Procure por 404s
```

---

## 🛠️ CHECKLIST DE DEBUG

```
Quando algo não funciona:

[ ] Limpei cache?
[ ] Fiz reload da página?
[ ] Abri DevTools (F12)?
[ ] Procurei erros no console?
[ ] Verifiquei elementos (Elements tab)?
[ ] Arquivo está linkado corretamente?
[ ] Nomes de classes estão corretos?
[ ] IDs estão corretos?
[ ] Sintaxe CSS está certa?
[ ] Pontuação está certa?
[ ] Arquivo foi salvo?
```

---

## 📞 PROBLEMAS ESPECÍFICOS

### Navbar
| Problema | Solução |
|----------|---------|
| Menu não abre | Verifique `nav-toggle` ID |
| Menu não fecha | Script.js está carregado? |
| Navbar sobrepõe | Adicione padding-top ao body |
| Ícone hamburger errado | Verifique SVG/unicode |

### Botões
| Problema | Solução |
|----------|---------|
| Hover não funciona | Verifique `:hover` CSS |
| Cor errada | Edite variável CSS |
| Tamanho errado | Verifique `padding` e `font-size` |
| Não clica | Verifique `pointer-events` |

### Responsividade
| Problema | Solução |
|----------|---------|
| Quebrado em mobile | Adicione viewport meta |
| Muito pequeno | Aumente `font-size` base |
| Muito grande | Reduza `width` máximo |
| Overflow | Use `overflow-x: hidden` |

### Animações
| Problema | Solução |
|----------|---------|
| Não anima | Verifique @keyframes |
| Muito rápido | Aumente `duration` |
| Muito lento | Reduza `duration` |
| Travado | Verifique performance |

---

## 💡 DICAS DE DEBUGGING

1. **Use DevTools constantemente**
   - F12 é seu melhor amigo
   - Inspect elements
   - Altere valores para testar

2. **Comece simples**
   - Teste uma coisa por vez
   - Não mude tudo de uma vez
   - Reverter mudanças ruins

3. **Leia mensagens de erro**
   - Console mostra exatamente o problema
   - Procure por 404s de arquivos
   - Erros de sintaxe aparecem

4. **Teste em múltiplos browsers**
   - Chrome, Firefox, Safari, Edge
   - Comportamentos podem variar
   - Mobile vs Desktop

5. **Documentação é tua amiga**
   - CSS tricks
   - MDN web docs
   - Stack Overflow

---

## 🆘 AINDA COM PROBLEMA?

1. **Verifique arquivo relevante:**
   - HTML problem → verify index.html
   - CSS problem → check styles.css
   - JS problem → look at script.js

2. **Busque no código:**
   - Use Ctrl+F para buscar
   - Procure por class/ID
   - Verifique sintaxe

3. **Leia documentação:**
   - `ROCKETSEAT_DESIGN_GUIDE.md`
   - `README_DESIGN_SYSTEM.md`
   - Comments no código

4. **Estude exemplo:**
   - Abra `docs/index.html`
   - Veja como está estruturado
   - Compare com seu projeto

---

## 📚 RECURSOS ÚTEIS

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com
- **Stack Overflow**: https://stackoverflow.com
- **Google Fonts**: https://fonts.google.com
- **Color tools**: https://coolors.co
- **Image compression**: https://tinypng.com

---

## ✅ VERIFICAÇÃO FINAL

Antes de desistir, tente isso:

1. [ ] Fecha o navegador inteiro
2. [ ] Limpa cache (Ctrl+Shift+Delete)
3. [ ] Reabre o arquivo
4. [ ] Faz hard refresh (Ctrl+Shift+R)
5. [ ] Verifica DevTools (F12)
6. [ ] Lê as mensagens de erro
7. [ ] Compara com `docs/index.html`
8. [ ] Relê a documentação

---

## 🎯 QUANDO TUDO FALHA

Se nada funcionou:

1. **Restaure arquivo original**
   ```
   Volte à última versão que funcionava
   ```

2. **Comece do zero**
   ```
   Copie docs/ inteiro novamente
   Teste se funciona
   Depois customize devagar
   ```

3. **Peça ajuda**
   ```
   Stack Overflow
   Comunidade
   Developer community
   ```

---

**Lembre-se:** 99% dos problemas têm solução simples. Relaxe, leia a documentação, e debugue com calma! 🚀

