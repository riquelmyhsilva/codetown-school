document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado e analisado!');

    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');

    // Alterna a visibilidade do dropdown ao clicar no botão
    languageButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique no botão feche o dropdown
        const isDisplayed = languageDropdown.style.display === 'block';
        languageDropdown.style.display = isDisplayed ? 'none' : 'block';
    });

    // Fecha o dropdown se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!languageButton.contains(event.target) && 
            !languageDropdown.contains(event.target)) {
            languageDropdown.style.display = 'none';
        }
    });
});
