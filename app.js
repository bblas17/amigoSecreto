// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let Amigos = document.getElementById('listaAmigos');
// let amigoGanador = sortearAmigo();


// Función para agregar amigo a la lista a sortear
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;

    if(!nombreAmigo || listaAmigos.includes(nombreAmigo)){
        alert(`${!nombreAmigo ? "Ingrese un nombre válido" : "El nombre que ingreso ya esta en la lista"}`);
	limpiarCaja();
    }else{
        listaAmigos.push(nombreAmigo);
        Amigos.innerHTML += `<li>${nombreAmigo}</li>`;
        limpiarCaja(); 
    }



}

// Función para limpiar caja al dar click al botón añadir 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


// Función para sortear al amigo secreto
function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert('Agrega al menos un nombre a la lista');
        // return;
    }
    let indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    amigoGanador = listaAmigos[indiceGanador];

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>El amigo secreto es: ${amigoGanador}</li>`;
    
}
