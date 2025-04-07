let peçaSelecionada = null;

const casas = document.querySelectorAll('#tabuleiro .h1');

casas.forEach(casa => {
    casa.addEventListener('click', () => {
        const imgNaCasa = casa.querySelector('img');
        if (peçaSelecionada === null && imgNaCasa && imgNaCasa.classList.contains('peaoAmarelo')) {
            peçaSelecionada = imgNaCasa;
            peçaSelecionada.style.outline = '4px solid red';
        } 
 
        else if (peçaSelecionada) {
            if (!casa.querySelector('img')) {
                casa.appendChild(peçaSelecionada);
            }
            peçaSelecionada.style.outline = '';
            peçaSelecionada = null;
        }
    });
});
