// assets/js/theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Mostra a lua para sugerir o modo escuro
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Mostra o sol para sugerir o modo claro
        }
        localStorage.setItem('theme', theme); // Salva a preferência no localStorage
    }

    // Carregar tema salvo ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDarkScheme) {
        applyTheme('dark'); // Se o sistema operacional prefere escuro, inicia no escuro
    } else {
        applyTheme('light'); // *** MUDANÇA APLICADA AQUI: Tema CLARO como padrão se não houver preferência ***
    }

    // Event Listener para alternar o tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    });
});