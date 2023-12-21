const tablero = document.getElementById('tablero');
const fichasNumericas = document.getElementsByClassName('ficha-numerica');
const fichasOperadoras = document.getElementsByClassName('ficha-operadora');
const casillas = document.getElementsByClassName('casilla');
const numerosAleatorios = document.getElementsByClassName('numero-aleatorio');


function generadorNumeroAlearorio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.round(Math.random() * 9))
        }, 30)
    })
}


let contadorSegundos = 100
let subContadorSegundos = 99

// contador para seccion jugador izquierdo
let intervalo = setInterval(() => {
    let contadorSegundosStr = contadorSegundos.toString().padStart(2, '0');
    document.getElementById('contador-segundos').innerHTML = contadorSegundosStr;
    contadorSegundos--;

    if (contadorSegundos > 66) {
        document.getElementById('contador-segundos').style.color = 'green';
    } else if (contadorSegundos > 33) { 
        document.getElementById('contador-segundos').style.color = 'yellow';
    } else {
        document.getElementById('contador-segundos').style.color = 'red';
    }

    if (contadorSegundos <= -1) {
        clearInterval(intervalo);
    }
}, 1000);

let subIntervalo = setInterval(() => {
    let subContadorSegundosStr = subContadorSegundos.toString().padStart(2, '0');
    document.getElementById('subcontador-segundos').innerHTML = subContadorSegundosStr;
    subContadorSegundos--;

    if (contadorSegundos > 66) {
        document.getElementById('subcontador-segundos').style.color = 'green';
    } else if (contadorSegundos > 33) { 
        document.getElementById('subcontador-segundos').style.color = 'yellow';
    } else {
        document.getElementById('subcontador-segundos').style.color = 'red';
    }

    if (contadorSegundos <= -1) {
        clearInterval(intervalo);
    }

    if (subContadorSegundos <= -1) {
        subContadorSegundos = 99;
    }
}, 10);




let contadorSegundos2 = 100 
let subContadorSegundos2 = 99


let intervalo2 = setInterval(() => {
    let contadorSegundosStr2 = contadorSegundos2.toString().padStart(2, '0');
    document.getElementById('contador-segundos-2').innerHTML = contadorSegundosStr2;
    contadorSegundos2--;

    if (contadorSegundos2 > 66) {
        document.getElementById('contador-segundos-2').style.color = 'green';
    } else if (contadorSegundos2 > 33) { 
        document.getElementById('contador-segundos-2').style.color = 'yellow';
    } else {
        document.getElementById('contador-segundos-2').style.color = 'red';
    }

    if (contadorSegundos2 <= -1) {
        clearInterval(intervalo2);
    }  
}, 1000);

let subIntervalo2 = setInterval(() => { 
    let subContadorSegundosStr2 = subContadorSegundos2.toString().padStart(2, '0');
    document.getElementById('subcontador-segundos-2').innerHTML = subContadorSegundosStr2;
    subContadorSegundos2--;

    if (contadorSegundos2 > 66) {
        document.getElementById('subcontador-segundos-2').style.color = 'green';
    } else if (contadorSegundos2 > 33) { 
        document.getElementById('subcontador-segundos-2').style.color = 'yellow';
    } else {
        document.getElementById('subcontador-segundos-2').style.color = 'red';
    }

    if (contadorSegundos2 <= -1) {
        clearInterval(intervalo2);
    }

    if (subContadorSegundos2 <= -1) {
        subContadorSegundos2 = 99;
    }
}, 10);
    



async function blabla() {
    for(let i = 0; i < numerosAleatorios.length; i++) {
        numerosAleatorios[i].innerHTML = await generadorNumeroAlearorio()
    }
}

blabla()

function startStop(numeroStop) {
    let target = document.getElementById(`stop${numeroStop}`);
    target = target.style.backgroundColor = 'red';

    if (numeroStop == 1) {
        clearInterval(intervalo);
        clearInterval(subIntervalo);
        let noTarget = document.getElementById('stop2');
        noTarget = noTarget.style.backgroundColor = 'green';
        
    } else {
        clearInterval(intervalo2);
        clearInterval(subIntervalo2);
    }

    if (numeroStop == 2) {
        let noTarget = document.getElementById('stop1');
        noTarget = noTarget.style.backgroundColor = 'green';
    }
}









let fichaSeleccionada = null;

for (let ficha of fichasNumericas) {
    ficha.addEventListener("dragstart", function (e) {
        fichaSeleccionada = e.target;
    });
}

for (let casilla of casillas) {
    casilla.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    casilla.addEventListener("drop", function (e) {
        e.preventDefault();
        if (fichaSeleccionada && casilla.childElementCount === 0) {
            casilla.appendChild(fichaSeleccionada);
            fichaSeleccionada = null;
        }
    });
}

for (let ficha of fichasOperadoras) {
    ficha.addEventListener("dragstart", function (e) {
        // Clona el elemento antes de arrastrarlo
        fichaSeleccionada = e.target.cloneNode(true);
    });
}

for (let casilla of casillas) {
    casilla.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    casilla.addEventListener("drop", function (e) {
        e.preventDefault();
        if (fichaSeleccionada && casilla.childElementCount === 0) {
            // Clona el elemento antes de agregarlo a la casilla
            casilla.appendChild(fichaSeleccionada.cloneNode(true));
            fichaSeleccionada = null;
        }
    });
}

