# 🧠 Site Psicóloga Meire França

![Version](https://img.shields.io/badge/version-1.0.0-e2ac74)
![License](https://img.shields.io/badge/license-MIT-3c1e20)
![Responsive](https://img.shields.io/badge/responsive-mobile%20first-e2ac74)

Site institucional elegante e responsivo para a psicóloga Meire França, especializada em Psicologia Humanista com abordagem centrada na pessoa.

## ✨ Características

### 🎨 Design Sofisticado e Feminino
- Paleta de cores harmoniosa (#e2ac74 e #3c1e20)
- Tipografia elegante combinando serif e sans-serif
- Elementos visuais suaves com bordas arredondadas
- Animações e transições suaves
- Efeitos hover interativos

### 📱 Mobile First
- Layout 100% responsivo
- Otimizado para dispositivos móveis
- Navegação touch-friendly
- Performance otimizada para conexões lentas
- Imagens adaptativas

### 🚀 Funcionalidades

- **Hero Section**: Apresentação impactante com logo e CTAs
- **Navegação Flutuante**: Menu sticky que acompanha o scroll
- **Seção Sobre**: Espaço dedicado para foto PNG da psicóloga com moldura decorativa
- **Cards de Serviços**: Apresentação visual dos tipos de atendimento
- **Localização**: Informações sobre consultório e formas de pagamento
- **Galeria**: Grid moderno com efeito hover e overlay
- **CTA de Agendamento**: Botões diretos para WhatsApp e Instagram
- **Footer Completo**: Todas as informações de contato e redes sociais

### ⚡ Performance

- Código puro HTML/CSS/JS (sem dependências)
- Apenas 1 biblioteca externa (Font Awesome para ícones)
- Animações com CSS puro
- Lazy loading de imagens
- SEO otimizado

## 📋 Estrutura do Projeto

```
site-psicologa-meire/
│
├── index.html          # Arquivo principal (HTML + CSS + JS inline)
├── README.md          # Este arquivo
│
└── img/               # Pasta de imagens (a criar)
    ├── foto-meire.png         # Foto PNG transparente da psicóloga
    ├── consultorio-1.jpg      # Fotos da galeria
    ├── consultorio-2.jpg
    ├── consultorio-3.jpg
    └── consultorio-4.jpg
```

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| **Primária** | `#e2ac74` | Fundo claro, destaques |
| **Secundária** | `#3c1e20` | Textos, fundo escuro |
| **Clara** | `#f5e6d3` | Backgrounds alternativos |
| **Hover** | `#d99a5f` | Estados de hover |

## 🔧 Instalação e Uso

### Opção 1: Usar diretamente
```bash
# Clone ou baixe o arquivo index.html
# Abra diretamente no navegador
```

### Opção 2: Servidor local
```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js (com http-server)
npx http-server
```

Acesse: `http://localhost:8000`

## 📝 Personalização

### 1. Adicionar sua Foto
Substitua o placeholder na seção "Sobre":
```html
<img src="img/foto-meire.png" alt="Psicóloga Meire França">
```
**Importante**: Use uma imagem PNG com fundo transparente para melhor resultado!

### 2. Adicionar Fotos da Galeria
Substitua os placeholders na seção "Galeria":
```html
<img src="img/consultorio-1.jpg" alt="Consultório 1">
```

### 3. Atualizar Informações de Contato
Edite no rodapé:
- Número do CRP
- Email
- Telefone
- Endereço

### 4. Links de Redes Sociais
Atualize os links do WhatsApp e Instagram:
```html
<a href="https://wa.me/5579998556740">...</a>
<a href="https://instagram.com/psimeirefranca">...</a>
```

### 5. Alterar Ícone do Logo
Para usar borboleta ao invés do cérebro:
```html
<!-- Cérebro (atual) -->
<i class="fas fa-brain"></i>

<!-- Borboleta -->
<i class="fas fa-butterfly"></i>

<!-- Psi (símbolo da psicologia) -->
<i class="fas fa-psi"></i>
```

## 🎯 Seções do Site

1. **Hero** - Apresentação inicial com CTAs
2. **Navegação Flutuante** - Menu sticky com links âncora
3. **Sobre** - Biografia e foto da psicóloga
4. **Serviços** - Cards com tipos de atendimento
5. **Localização** - Informações de consultório e pagamento
6. **Galeria** - Fotos do ambiente
7. **Agendamento** - CTA com links diretos
8. **Footer** - Contatos e redes sociais

## 🌐 Compatibilidade

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Navegadores mobile (iOS/Android)

## 📱 Breakpoints Responsivos

```css
/* Mobile First - Base styles */
Default: 320px+

/* Tablet */
@media (max-width: 768px)

/* Desktop */
@media (min-width: 769px)
```

## ⚙️ Funcionalidades JavaScript

- Scroll suave para navegação por âncoras
- Efeito parallax no hero
- Animação de entrada de elementos (Intersection Observer)
- Destaque automático do menu conforme scroll
- Performance otimizada

## 🔒 SEO e Acessibilidade

- ✅ Semântica HTML5
- ✅ Meta tags otimizadas
- ✅ Alt text em todas as imagens
- ✅ ARIA labels nos links sociais
- ✅ Contraste de cores acessível
- ✅ Navegação por teclado
- ✅ Focus visível em elementos interativos

## 📊 Performance

- 🚀 Carregamento rápido (< 2s)
- 📦 Tamanho reduzido (sem frameworks pesados)
- 🎨 CSS otimizado
- ⚡ JavaScript vanilla puro

## 🤝 Contribuições

Site desenvolvido por **GeoCODE Programmer**

Para suporte ou melhorias:
- 📧 Email: geocodeprogrammer@gmail.com

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 🎁 Recursos Utilizados

- [Font Awesome 6.5.0](https://fontawesome.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Tipografia (system fonts)
- Gradientes CSS nativos
- Animações CSS puras

## 📞 Contatos da Psicóloga

- 📱 WhatsApp: [+55 (79) 9 9985-5740](https://wa.me/5579998556740)
- 📸 Instagram: [@psimeirefranca](https://instagram.com/psimeirefranca)
- 📍 Localização: Av. Ministro Geraldo Barreto Sobral, 2131 - Jardins, Aracaju/SE

## 🔮 Próximas Melhorias (Sugestões)

- [ ] Sistema de agendamento online integrado
- [ ] Blog de conteúdos sobre saúde mental
- [ ] Área de depoimentos de pacientes
- [ ] Integração com Google Maps
- [ ] Newsletter
- [ ] Chat online
- [ ] Área restrita para pacientes
- [ ] Sistema de pagamento online

---

**Desenvolvido com 💜 por GeoCODE Programmer**

*Última atualização: Novembro 2025*
