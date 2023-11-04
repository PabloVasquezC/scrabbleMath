// const tablero = document.getElementById('tablero');
// const fichas = document.getElementsByClassName('ficha');
// const casilla = document.getElementsByClassName('casilla');

// console.log(casilla)


// for(let ficha of fichas) {
//     ficha.addEventListener("dragstart", function(e) {
//         let seleccionado = e.target;
    
//     tablero.addEventListener("dragover", function(e) {
//         e.preventDefault();
//     });

//     casilla.addEventListener("drop", function(e){
//         casilla.appendChild(seleccionado);
//         seleccionado = null;
//     })
    

//     })

// }


// const tablero = document.getElementById('tablero');
// const fichas = document.getElementsByClassName('ficha');
// const casillas = document.getElementsByClassName('casilla');

// for (let ficha of fichas) {
//     ficha.addEventListener("dragstart", function(e) {
//         let seleccionado = e.target;
//     });

//     for (let casilla of casillas) {
//         casilla.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         casilla.addEventListener("drop", function(e) {
//             e.preventDefault();
//             casilla.appendChild(seleccionado);
//             seleccionado = null;
//         });
//     }
// }

const tablero = document.getElementById('tablero');
const fichas = document.getElementsByClassName('ficha');
const casillas = document.getElementsByClassName('casilla');

let fichaSeleccionada = null;

for (let ficha of fichas) {
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
