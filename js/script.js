const peoesAmarelos = document.querySelectorAll('.peaoAmarelo');

peoesAmarelos.forEach(peao => {
    let passosA = 0;

    peao.addEventListener('click', () => {
        if (passosA >= 2) return;

        passosA++;
        peao.style.position = 'relative';
        peao.style.top = (225 * passosA) + 'px';
    });
});


const peoesRosas = document.querySelectorAll('.peaoRosa');

peoesRosas.forEach(peao => {
    let passosR = 0;

    peao.addEventListener('click', () => {
        if (passosR >= 2) return;

        passosR++;
        peao.style.position = 'relative';
        peao.style.top = (-225 * passosR) + 'px';
    });
});


const torresAmarelos = document.querySelectorAll('.torreAmarelo');
    let passosTA = 0;


torresAmarelos.forEach(torre => {
    

    torre.addEventListener('click', () => {
        if (passosTA >= 7) return;

        passosTA++;
        torre.style.position = 'relative';
        torre.style.top = (225 * passosTA) + 'px';
    });
});

