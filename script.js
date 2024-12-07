// Aguardar o carregamento completo da página
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    // Verificar se o usuário rolou a página para baixo
    if (window.scrollY > 0) {
        navbar.classList.add("white"); // Adiciona a classe 'white' quando o scroll começa
    } else {
        navbar.classList.remove("white"); // Remove a classe quando o usuário voltar ao topo
    }
});
