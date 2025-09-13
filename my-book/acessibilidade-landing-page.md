# ♿ Acessibilidade para Devs: vou deixar esse arquivo para consultas rápidas! Estude!

E aí, meu 🐙! Quero deixar salvo aqui no meu caderninho algo que, se bem feito, transforma um site bom em um site ESPETACULAR: **Acessibilidade**. Não é só uma "feature", é a base de um bom Design de Experiência do Usuário (UX) e CIDADANIA DIGITAL!

---

## 💡 Por Que Acessibilidade Importa (e não é um bicho de 7 cabeças)?

Pense em quem usa seu site:
* Pessoas com deficiência visual (cegueira, baixa visão) que usam leitores de tela.
* Pessoas com deficiência motora que usam teclado para navegar.
* Pessoas com deficiência auditiva que precisam de legendas em vídeos.
* Pessoas em ambientes com pouca luz ou com telas pequenas.
* Todo mundo que usa o teclado para ser mais rápido!

**Acessibilidade garante que TODOS possam usar e se beneficiar do seu trabalho.** É sobre inclusão, respeito e, sim, otimiza seu site para SEO também\!

---

## ✅ Pontos Cruciais para Fixar (Checklist Rápido da Miriã):

1.  **Contraste de Cores (WCAG AA/AAA):**
    * **O que é:** A diferença de luminosidade entre o texto e o fundo.
    * **Por que importa:** Para que pessoas com baixa visão ou daltonismo consigam ler seu conteúdo sem esforço.
    * **Como Fixar:** Sempre teste suas combinações de cores (principalmente texto e fundo) com ferramentas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Use as cores da sua paleta de forma consciente.

2.  **Texto Alternativo em Imagens (`alt`):**
    * **O que é:** O atributo `alt` na tag `<img>`.
    * **Por que importa:** Leitores de tela leem esse texto para descrever a imagem para quem não pode vê-la. Também aparece se a imagem não carregar.
    * **Como Fixar:** **NUNCA** deixe `alt=""` a não ser que a imagem seja puramente decorativa e não adicione valor ao conteúdo. Descreva a imagem de forma concisa e útil.
        * `alt="Logotipo Miriã Amaral - Desenvolvedora Front-End"` (bom!)
        * `alt="Foto de perfil de Miriã Amaral sorrindo"` (melhor ainda!)

3.  **Foco Visível para Teclado (`:focus`):**
    * **O que é:** O estilo visual que aparece quando um elemento interativo (link, botão, campo de formulário) é selecionado ao navegar com a tecla `Tab`.
    * **Por que importa:** Essencial para usuários que não usam mouse. Eles precisam saber onde estão na página.
    * **Como Fixar:** Personalize o `:focus` no seu CSS. Remova o `outline` padrão (`outline: none;`) e adicione um `box-shadow` ou `border` visível e que combine com sua paleta.
        ```css
        a:focus, button:focus {
            outline: none; /* Remove padrão */
            box-shadow: 0 0 0 3px var(--color-accent); /* Anel de foco customizado */
            border-radius: 5px; /* Opcional, para botões */
        }
        ```
        **Teste:** Use a tecla `Tab` para navegar pela sua página. O foco está claro em TODOS os elementos clicáveis?

4.  **Marcação Semântica do HTML:**
    * **O que é:** Usar as tags HTML corretas para o propósito correto (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`, `<p>`, `<ul>`, `<ol>`, `<button>`, `<a>`, etc.).
    * **Por que importa:** Leitores de tela usam essa estrutura para dar contexto aos usuários. Um `<button>` é lido como "botão", um `<a>` como "link". Se você usar `<div>` para tudo, o leitor de tela não entende a função.
    * **Como Fixar:** Esqueça o `div` para botões ou links. Use a tag que melhor descreve o conteúdo.
        * `<h1>Título Principal</h1>`
        * `<button>Clique Aqui</button>`
        * `<a href="#secao">Ir para Seção</a>`

5.  **Títulos Claros e Descritivos (`aria-label`):**
    * **O que é:** O atributo `aria-label` fornece um rótulo acessível para elementos que não têm um texto visível (como ícones).
    * **Por que importa:** Leitores de tela precisam de contexto. Se seu link é só um ícone do LinkedIn, o leitor de tela não sabe o que é.
    * **Como Fixar:** Adicione `aria-label` aos links de ícones.
        ```html
        <a href="[https://www.linkedin.com/in/miriaamaralcs](https://www.linkedin.com/in/miriaamaralcs)" target="_blank" aria-label="Meu perfil no LinkedIn">
            <img src="./assets/img/linkedin-icon.png" alt="Ícone do LinkedIn">
        </a>
        ```

---

**Lembre-se, meu 🐙:** Fazer um site acessível não é só seguir regras, é criar um ambiente digital onde todos se sintam bem-vindos e capazes de interagir. É um sinal de profissionalismo e empatia.
