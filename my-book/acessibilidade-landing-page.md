# ♿ Acessibilidade em uma Landing Page

E aí, meu 🐙! Hoje a gente vai falar de um tema que é puro amor e respeito no mundo do desenvolvimento web: **Acessibilidade\!**

Sabe, não basta só fazer um site bonito e funcional pra *alguns*. A gente tem que pensar em *todo mundo*, né? Independentemente de como a pessoa acessa a internet ou quais são suas necessidades, ela tem o direito de navegar e entender o que a gente cria. E é exatamente isso que a gente buscou fazer aqui na nossa Landing Page: um cantinho digital que abraça geral.

Nesta seção, a gente vai documentar as práticas e os macetes que a gente usou pra deixar nosso projeto mais inclusivo. Bora mergulhar nesse universo que só faz bem pra gente e pros nossos usuários\!

## 🎯 Por Que Acessibilidade?

* **Inclusão que Aquece o Coração:** Permite que pessoas com deficiências (visuais, motoras, cognitivas, auditivas) usem a página sem perrengue. É sobre gente, né?
* **Melhora a UX pra TODOS:** Sério, um site acessível é bom pra todo mundo\! Pensa só: usuários em dispositivos móveis, com a internet meio lenta, ou tentando acessar a página debaixo do sol forte... Acessibilidade ajuda demais.
* **SEO Amigável:** Os robozinhos do Google (e de outros buscadores) adoram sites bem estruturados e acessíveis. Quer um empurrãozinho no ranqueamento? Acessibilidade te dá\!
* **É o Certo a Fazer:** Além de ser ético, em muitos lugares, já é até um requisito legal. Então, bora fazer bonito e certo\!

## ✅ Implementações e Boas Práticas (Com o nosso toque especial)

### 1. Semântica HTML Apropriada

Meu 🐙, a gente usou o HTML não só pra colocar as coisas na tela, mas pra *contar uma história* sobre o nosso conteúdo. Isso é ouro pra leitores de tela e tecnologias assistivas entenderem o que tá rolando.

* `<header>`: Onde a cabeça do nosso site mora.
* `<nav>`: O GPS do nosso site, pra galera se localizar.
* `<main>`: Aqui tá o filé, o conteúdo principal e único que a gente quer mostrar.
* `<section>`: Agrupamos os temas, tipo "Home", "Sobre Mim", "Portfólio" e "Contato", pra tudo ficar organizadinho.
* `<footer>`: O rodapé, onde a gente deixa aquele abraço final.
* `<h1>` a `<h6>`: Usamos com sabedoria, tipo uma hierarquia real de títulos.
    * Ex: `<h1>` pro títulão da nossa área Hero, `<h2>` pros títulos de seções.

### 2. Texto Alternativo (`alt` text) para Imagens

Se tem imagem que importa, tem `alt` text pra descrever\! Isso é tipo um sussurro no ouvido de quem não pode ver a imagem, explicando o que ela é. Se for só enfeite, a gente deixa `alt=""` e o leitor de tela ignora numa boa.

* **Exemplo na logo:** `<img src="./assets/img/logo-miria.png" alt="Logotipo Miriã Amaral - Desenvolvedora Front-End">`
* **Exemplo na foto de perfil:** `<img src="./assets/img/profile-miria.jpg" alt="Foto de perfil de Miriã Amaral">`
* **Miniaturas dos projetos:** As imagens de fundo dos nossos cards (`background-image` CSS) não precisam de `alt` diretamente, mas ó: o título, a descrição e o link dentro do card já fazem esse papel de explicar o projeto. Sacou a jogada?

### 3. Estados de Foco (`:focus`) Visíveis

Sabe quando a galera navega só com o teclado? O estado de foco é a luz que guia\! A gente garante que links e botões tenham um contorno bem visível quando focados.

* **No CSS (`style.css`):**
    ```css
    a:focus, button:focus {
        box-shadow: 0 0 0 3px var(--color-accent); /* Nosso anel de foco estiloso */
        border-radius: 5px;
    }
    /* E os específicos, pra cada cantinho da página */
    .navbar a:focus {
        box-shadow: 0 0 0 2px var(--color-accent);
    }
    .social-links a:focus {
        box-shadow: 0 0 0 3px var(--color-accent);
        border-radius: 50%;
    }
    ```

### 4. Atributos `aria-label` para Elementos Interativos

Praqueles ícones e botões que são pura imagem e não têm texto, a gente usa `aria-label` pra cochichar pro leitor de tela o que eles fazem. É tipo uma legenda invisível, mas super importante.

* **Alternador de Tema:**
    ```html
    <button id="theme-toggle" class="theme-toggle" aria-label="Alternar tema claro/escuro">
        <i class="fas fa-sun"></i> 
    </button>
    ```
* **Links Sociais:**
    ```html
    <a href="[https://www.linkedin.com/in/miriaamaralcs](https://www.linkedin.com/in/miriaamaralcs)" target="_blank" aria-label="Meu perfil no LinkedIn">
        <img src="./assets/img/linkedin-icon.png" alt="Ícone do LinkedIn">
    </a>
    ```

### 5. Contraste de Cores Suficiente

A gente escolheu as cores dos nossos temas com carinho, pensando no contraste. O texto precisa saltar do fundo, né? Testamos tudo pra ter certeza que a leitura é confortável em qualquer modo (claro ou escuro).

### 6. Ordem de Tabulação Lógica

Navegar pelo nosso site usando só o teclado é uma experiência suave, porque a gente seguiu a ordem natural das coisas. É como ler um livro, de cima pra baixo, da esquerda pra direita.

### 7. Uso do `lang` Atributo

Ah, e não podia faltar o `lang="pt-br"` na tag `<html>`\! Isso diz pros leitores de tela que estamos falando em português, então a pronúncia sai perfeitinha.

```html
<html lang="pt-br">
```

### 8\. Flexibilidade dos Cards de Projeto

Mesmo com as nossas miniaturas lindas nos cards, o conteúdo textual ali dentro (título, descrição, link) é 100% acessível. Ou seja, quem usa leitor de tela não perde nada e entende o projeto numa boa, sem depender só da imagem. Isso é inclusão de verdade, meu 🐙!

---

### Conclusão

Viu só, meu 🐙? Acessibilidade não é um bicho de sete cabeças, é um carinho a mais que a gente dá pros nossos usuários. Ao integrar essas práticas desde o início, a gente mostra que nosso projeto não é só bonito, mas também humano e pra frente. É assim que a gente faz a diferença no mundo digital\!