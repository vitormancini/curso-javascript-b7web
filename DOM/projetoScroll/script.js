function mostrarBotaoScroll() {
    // VERIFICANDO A POSIÇÃO DO SCROLL
    if(window.scrollY === 0) {
        document.getElementById('botaoSubir').style.display = 'none';
    }
    else {
        document.getElementById('botaoSubir').style.display = 'flex';
    }
}

// FUNÇÃO DO BOTÃO AO CLICAR
function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// CRIANDO UM EVENTO QUE MONITORA MODIFICAÇÕES NO SCROLL DA TELA
window.addEventListener('scroll', mostrarBotaoScroll);