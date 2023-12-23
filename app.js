const tablero = document.getElementById('tablero');
const fichasNumericas = document.getElementsByClassName('ficha-numerica');
const fichasOperadoras = document.getElementsByClassName('ficha-operadora');
const casillas = document.getElementsByClassName('casilla');
const numerosAleatorios = document.getElementsByClassName('numero-aleatorio');
const contadorSegundos = document.getElementById('contador-segundos');
const subContadorSegundos = document.getElementById('subcontador-segundos');
const contadorSegundos2 = document.getElementById('contador-segundos-2');
const subContadorSegundos2 = document.getElementById('subcontador-segundos-2');



function generadorNumeroAlearorio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.round(Math.random() * 9))
        }, 30)
    })
}


let segundosActuales = 100
let subsegundosActuales = 99

// contador para seccion jugador izquierdo
let intervalo = setInterval(() => {
    let segundosActualesStr = segundosActuales.toString().padStart(2, '0');
    contadorSegundos.innerHTML = segundosActualesStr;
    segundosActuales--;

    if (segundosActuales > 66) {
        contadorSegundos.style.color = 'green';
    } else if (segundosActuales > 33) { 
        contadorSegundos.style.color = 'yellow';
    } else {
        contadorSegundos.style.color = 'red';
    }

    if (segundosActuales <= -1) {
        clearInterval(intervalo);
    }
}, 1000);

let subIntervalo = setInterval(() => {
    let subsegundosActualesStr = subsegundosActuales.toString().padStart(2, '0');
    subContadorSegundos.innerHTML = subsegundosActualesStr;
    subsegundosActuales--;

    if (segundosActuales > 66) {
        subContadorSegundos.style.color = 'green';
    } else if (segundosActuales > 33) { 
        subContadorSegundos.style.color = 'yellow';
    } else {
        subContadorSegundos.style.color = 'red';
    }

    if (segundosActuales <= -1) {
        clearInterval(intervalo);
    }

    if (subsegundosActuales <= -1) {
        subsegundosActuales = 99;
    }
}, 10);




let segundosActuales2 = 100 
let subsegundosActuales2 = 99


let intervalo2 = setInterval(() => {
    let segundosActualesStr2 = segundosActuales2.toString().padStart(2, '0');
    contadorSegundos2.innerHTML = segundosActualesStr2;
    segundosActuales2--;

    if (segundosActuales2 > 66) {
        contadorSegundos2.style.color = 'green';
    } else if (segundosActuales2 > 33) { 
        contadorSegundos2.style.color = 'yellow';
    } else {
        contadorSegundos2.style.color = 'red';
    }

    if (segundosActuales2 <= -1) {
        clearInterval(intervalo2);
    }  
}, 1000);

let subIntervalo2 = setInterval(() => { 
    let subsegundosActualesStr2 = subsegundosActuales2.toString().padStart(2, '0');
    subContadorSegundos2.innerHTML = subsegundosActualesStr2;
    subsegundosActuales2--;

    if (segundosActuales2 > 66) {
        subContadorSegundos2.style.color = 'green';
    } else if (segundosActuales2 > 33) { 
        subContadorSegundos2.style.color = 'yellow';
    } else {
        subContadorSegundos2.style.color = 'red';
    }

    if (segundosActuales2 <= -1) {
        clearInterval(intervalo2);
    }

    if (subsegundosActuales2 <= -1) {
        subsegundosActuales2 = 99;
    }
}, 10);
    






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

