

const aves = document.querySelectorAll('.passaro');

aves.forEach((passaro) => {
    passaro.addEventListener('mouseenter', () => {

        /*
        if(window.innerWidth < 550) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        */

        alterarImagemPassaroListado(passaro);
        alterarNomePassaroListado(passaro);
     
    });

});

function alterarImagemPassaroListado(passaro) {
    const imagemPassaroTela = document.querySelector('.passaro-tela');
    const idPassaro = passaro.attributes.id.value;
    imagemPassaroTela.src = `./image/card-${idPassaro}.png`;
}

function alterarNomePassaroListado(passaro) {
    const nomePassaro = document.getElementById('nome-passaro');
    nomePassaro.innerText = passaro.getAttribute('data-name');
}