# 📚 Estudos e Aplicação em uma Landing Page Pessoal

E aí, meu 🐙! Que bom ter você aqui pra gente bater um papo sobre a cozinha do nosso projeto\!

Nesta seção, a gente vai abrir o nosso caderninho de anotações e mergulhar nos conceitos e tecnologias que a gente botou a mão na massa pra criar essa Landing Page pessoal. É tipo um diário de bordo do nosso aprendizado, mostrando como cada ferramenta virou um tijolinho na construção desse site irado. Se liga nos insights\!

## 🎯 HTML5: A Estrutura Semântica (O Esqueleto do Nosso Site)

O HTML é a base de tudo, né? Mas a gente não usou ele de qualquer jeito, não\! A gente foi na fé do HTML5 semântico pra deixar a estrutura clara, acessível e super amiga dos buscadores.

### Conceitos Chave Aplicados:

* **Estrutura da Página:** Usamos tags como `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` pra dar um sentido, uma ordem lógica pra tudo. É como organizar um guarda-roupa: cada coisa no seu lugar\!
    * Exemplo: A seção do nosso portfólio (`<section id="projects">`) abraça todos os cards dos nossos projetos, deixando tudo coeso.
* **Elementos Semânticos no Detalhe:**
    * `<img alt="...">`: Pra dar voz às nossas imagens e descrever o que elas são.
    * `<button aria-label="...">`: Super importante pra botões que são só ícones, ele "sussurra" a função do botão pros leitores de tela.
    * `<link rel="stylesheet">`: Pra chamar nosso CSS e deixar tudo lindão.
    * `<script src="...">`: Pra trazer a inteligência do JavaScript pra página, sem travar o carregamento.
* **Meta Tags Essenciais:** Aquelas informações que a gente dá pro navegador e pro mundo sobre o nosso site (tipo `charset`, `viewport` pra responsividade e o `title` da aba).

## 🎨 CSS3: Estilização, Responsividade e Temas (A Roupa e a Maquiagem do Nosso Site)

Ah, o CSS\! É ele que transforma o esqueleto HTML em um show de design. Aqui a gente brincou de estilizar, de adaptar pra qualquer tela e, claro, de fazer a mágica dos temas claro/escuro.

### Conceitos Chave Aplicados:

* **Variáveis CSS (`:root`, `body.light-theme`):**
    * A gente criou umas "caixinhas" de cores (`--color-bg`, `--color-text`, `--color-accent`) lá no início do CSS. Isso facilitou DEMAIS na hora de mudar o tema e manter tudo organizado.
    * Quando a gente liga o "modo claro", a classe `body.light-theme` entra em ação e "troca" os valores dessas caixinhas de cor, tipo um passe de mágica\!
    * Exemplo: `background-color: var(--color-bg);` — simples e poderoso.
* **Flexbox e Grid Layout:**
    * **Flexbox:** Nosso parceiro pra alinhar e distribuir itens em uma linha ou coluna (tipo no nosso `header-content`, `navbar ul` e nos `social-links`).
        * Ex: `display: flex; justify-content: space-between; align-items: center;` no cabeçalho, deixando tudo equilibrado.
    * **CSS Grid:** O cara pra organizar as coisas em duas dimensões. Usamos ele pra grade dos nossos projetos (`.projects-grid`), que se encaixa super bem em qualquer tela.
        * Ex: `display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` — uma grade esperta que se adapta sozinha.
* **Responsividade (`@media` Queries):**
    * Sabe aquele ajuste fino pra tela do celular, do tablet ou do computador? A gente usou as `media queries` pra isso\! Ajustamos tamanhos de fonte, espaçamentos e até a forma como o cabeçalho se comporta pra ficar tudo perfeito em qualquer lugar.
* **Transições e Transformações:**
    * `transition: background-color var(--transition-speed), color var(--transition-speed);` — praquela troca de tema suave, sem dar "susto" no usuário.
    * `transform: translateY(-5px);` nos botões no `hover` — pra eles darem um "pulinho" discreto quando o mouse passa.
    * `transform: scale(1.1);` nos ícones no `hover` — pra eles crescerem um tico e mostrarem que são interativos.
* **Pseudo-classes (`:hover`, `:focus`):**
    * Essas são pra dar vida aos nossos elementos\! Mostram pro usuário que algo é clicável (`:hover`) ou que ele tá usando o teclado pra focar em algo (`:focus`), o que é super importante pra acessibilidade.
* **Propriedades de Background para Cards de Projeto (Novidade e um Charme a Mais\!):**
    * Agora, cada `project-card` tem uma imagem L-I-N-D-A do projeto real como plano de fundo (`background-image: url(...)`, `background-size: cover;`, `background-position: center;`). As imagens são PNGs 16:9, pra tudo ficar padronizado e profissional.
    * A gente colocou um `card-overlay` (uma camada escura) por cima da imagem pra deixar o texto super legível.
    * E a cereja do bolo: quando você passa o mouse, esse `card-overlay` fica mais transparente, mostrando mais da imagem do projeto\! Ah, e o card ainda dá aquela "levantadinha" com `transform: translateY(-10px);`. Pura magia, meu 🐙!

## 💻 JavaScript: Interatividade e Lógica (O Cérebro do Nosso Site)

O JavaScript é quem bota pra quebrar na interatividade\! Foi ele que deu inteligência pra nossa Landing Page, principalmente no nosso super alternador de tema.

### Conceitos Chave Aplicados:

* **Manipulação do DOM (Document Object Model):**
    * `document.getElementById()`: Pra "pegar" um elemento específico na página (tipo o nosso botão de tema).
    * `element.classList.add()`, `element.classList.remove()`, `element.classList.contains()`: Pra ligar e desligar classes CSS (como `light-theme` e `dark-theme`) e fazer a mágica do tema.
    * `element.innerHTML`: Pra trocar o ícone do nosso botão de tema (sol vira lua, lua vira sol).
* **Event Listeners:**
    * `document.addEventListener('DOMContentLoaded', ...)`: Garante que o nosso código só comece a rodar DEPOIS que todo o HTML estiver pronto. Sem pressa, tudo no seu tempo.
    * `themeToggle.addEventListener('click', ...)`: Fica de "olho" no clique do botão pra fazer a troca de tema.
* **API Web Storage (`localStorage`):**
    * `localStorage.setItem('theme', theme);`: Essa é pra lembrar a preferência do usuário\! Se ele escolher tema escuro, a gente salva isso e, na próxima vez que ele visitar a página, *boom* — já aparece no tema escuro. Que chique, né?
    * `localStorage.getItem('theme');`: Pra gente buscar essa preferência que foi salva.
* **Media Queries em JavaScript (`window.matchMedia`):**
    * `window.matchMedia('(prefers-color-scheme: dark)').matches;`: Isso aqui é pra ver se o sistema operacional do usuário (Windows, macOS, Android, iOS) já está no modo escuro. Se sim, a gente já começa a página no tema escuro, respeitando a escolha dele. Inteligente, né?
* **Funções Reutilizáveis:**
    * Criamos a função `applyTheme(theme)` pra deixar o código da troca de tema bem organizado e fácil de entender.

## 🗃 Git e GitHub: Controle de Versão e Colaboração (Nosso Histórico de Aventuras)

Essenciais pra gente não se perder no caminho\! O Git e o GitHub são nossos melhores amigos pra controlar as versões do projeto e, quem sabe, até colaborar com outros devs um dia.

### Conceitos Chave Aplicados:

* **`git add`:** Pra preparar nossas mudanças pro próximo "capítulo" (commit).
* **`git commit -m "feat: mensagem"`:** A gente escreve commits com "títulos" que explicam o que foi feito (`feat` pra nova funcionalidade, `style` pra estilo, `docs` pra documentação).
* **`git push`:** Pra mandar tudo pro nosso "livro" no GitHub.
* **Branches:** A gente tá trabalhando na branch `main` (a principal).
* **GitHub Pages:** Graças a ele, nossa Landing Page está lá, online, pro mundo ver\!

---

### Conclusão

Ufa, meu 🐙\! Quanta coisa a gente aprendeu e aplicou, hein? Cada linha de código foi um degrau nessa jornada de aprendizado. Com esse desafio, a gente viu na prática como o HTML, CSS e JavaScript se unem pra criar algo completo e com uma experiência top. E documentar tudo isso? É a cereja do bolo pra gente revisitar, aprender e mostrar o nosso processo pra quem quiser ver. Pra cima\!