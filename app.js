const tablero = document.getElementById('tablero');
const fichas = document.getElementsByClassName('ficha');
const casilla = document.getElementsByClassName('casilla');

console.log(casilla)


for(let ficha of fichas) {
    ficha.addEventListener("dragstart", function(e) {
        let seleccionado = e.target;
    
    tablero.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    tablero.addEventListener("drop", function(e){
        casilla.appendChild(seleccionado);
        seleccionado = null;
    })
    

    })

}