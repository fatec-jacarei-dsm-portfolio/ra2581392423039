#!/bin/bash

# 🚀 SCRIPT RÁPIDO - Setup de Novo Projeto Rocketseat Design

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║       🚀 Rocketseat Design System - Quick Setup            ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"

# Verificar argumentos
if [ -z "$1" ]; then
    echo -e "${YELLOW}Uso: ./setup.sh <nome-do-projeto>${NC}"
    echo ""
    echo "Exemplo:"
    echo "  ./setup.sh meu-portfolio"
    echo "  ./setup.sh novo-site"
    exit 1
fi

PROJECT_NAME=$1

echo ""
echo -e "${YELLOW}📁 Criando estrutura do projeto: ${GREEN}$PROJECT_NAME${NC}"

# Criar diretórios
mkdir -p "$PROJECT_NAME"
mkdir -p "$PROJECT_NAME/css"
mkdir -p "$PROJECT_NAME/js"
mkdir -p "$PROJECT_NAME/assets/images"

echo -e "${GREEN}✓ Diretórios criados${NC}"

# Copiar arquivos
echo ""
echo -e "${YELLOW}📋 Copiando arquivos...${NC}"

# Este script assume que está na pasta raiz do design system
cp "docs/css/styles.css" "$PROJECT_NAME/css/" 2>/dev/null && echo -e "${GREEN}✓ CSS copiado${NC}" || echo -e "${YELLOW}⚠ CSS não encontrado (copie manualmente)${NC}"
cp "docs/js/script.js" "$PROJECT_NAME/js/" 2>/dev/null && echo -e "${GREEN}✓ JavaScript copiado${NC}" || echo -e "${YELLOW}⚠ JS não encontrado (copie manualmente)${NC}"
cp "TEMPLATE_ROCKETSEAT.html" "$PROJECT_NAME/index.html" 2>/dev/null && echo -e "${GREEN}✓ HTML template copiado${NC}" || echo -e "${YELLOW}⚠ Template não encontrado (copie manualmente)${NC}"

echo ""
echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}✓ Projeto '$PROJECT_NAME' criado com sucesso!${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"

echo ""
echo -e "${YELLOW}📝 Próximos passos:${NC}"
echo "  1. cd $PROJECT_NAME"
echo "  2. Edite index.html com seu conteúdo"
echo "  3. Customize cores em css/styles.css (se quiser)"
echo "  4. Adicione suas imagens em assets/images/"
echo ""

echo -e "${YELLOW}🎨 Customizar cores:${NC}"
echo "  Edite css/styles.css e procure por:"
echo "  --accent-green: #00d081;"
echo "  --accent-purple: #8257e5;"
echo ""

echo -e "${YELLOW}📚 Documentação:${NC}"
echo "  • Leia: RESUMO_KIT.md"
echo "  • Leia: README_DESIGN_SYSTEM.md"
echo "  • Consulte: ÍNDICE_CENTRAL.md"
echo ""

echo -e "${GREEN}Boa sorte com seu projeto! 🚀${NC}"
