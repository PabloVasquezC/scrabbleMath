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
        if (fichaSeleccionada) {
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
        if (fichaSeleccionada) {
            // Clona el elemento antes de agregarlo a la casilla
            casilla.appendChild(fichaSeleccionada.cloneNode(true));
            fichaSeleccionada = null;
        }
    });
}

