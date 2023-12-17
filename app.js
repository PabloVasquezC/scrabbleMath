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

let contadorSegundos = 30
let subContadorSegundos = 99

let intervalo = setInterval(() => {
    let contadorSegundosStr = contadorSegundos.toString().padStart(2, '0');
    document.getElementById('contador-segundos').innerHTML = contadorSegundosStr;
    contadorSegundos--;

    if (contadorSegundos > 19) {
        document.getElementById('contador-segundos').style.color = 'green';
    } else if (contadorSegundos > 9) { 
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

    if (contadorSegundos > 19) {
        document.getElementById('subcontador-segundos').style.color = 'green';
    } else if (contadorSegundos > 9) { 
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


async function blabla() {
    for(let i = 0; i < numerosAleatorios.length; i++) {
        numerosAleatorios[i].innerHTML = await generadorNumeroAlearorio()
    }
}

blabla()









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

