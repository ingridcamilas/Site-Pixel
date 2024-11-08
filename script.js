// Seleciona todos os links (a) na página cujo atributo href começa com '#'
// Isso é feito usando o seletor 'a[href^="#"]', que busca links de ancoragem.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Adiciona um ouvinte de evento para cada link encontrado
    anchor.addEventListener('click', function(e) {
        // Impede o comportamento padrão do clique no link (não faz o navegador ir até a âncora)
        e.preventDefault();

        // Obtém o valor do atributo 'href' do link clicado (por exemplo, '#section1')
        // Usamos este valor para encontrar o elemento correspondente na página.
        // O 'this.getAttribute('href')' retorna o valor do atributo 'href' do link clicado.
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // Faz a rolagem suave até o elemento alvo.
            behavior: 'smooth'  // A rolagem é feita de forma suave (com animação).
        });
    });
});