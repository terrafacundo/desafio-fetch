
function init(){

//toma nodos y declaraciones
let ordenador_pokes = document.getElementById("contenedor_pokes");

//llamando API
let url ="https://pokeapi.co/api/v2/pokemon/";

fetch(url)
.then((pokes)=>pokes.json())
.then((pag)=>{
    display_poke(pag);
});

function display_poke(pag){
    pag.results.forEach(element => {
        let carta = document.createElement("div");
        carta.setAttribute("class","carta");
        carta.innerHTML=`${element.name}`;
        ordenador_pokes.append(carta);

        let url_poke=element.url;
        fetch(url_poke)
        .then((poke)=>poke.json())
        .then((into)=>{
            let foto = document.createElement("img");
            foto.setAttribute("src",`${into.sprites.front_default}`);
            carta.append(foto);
        })

    });
};

//boton de cambio pagina

const boton_anterior = document.getElementById("anterior");
const boton_siguiente =document.getElementById("siguiente");

boton_anterior.addEventListener("click",cambio_pagina_atras);
boton_siguiente.addEventListener("click",cambio_pagina);

function cambio_pagina_atras(){
    ordenador_pokes.innerHTML="";
    fetch(url)
    .then((pokes)=>pokes.json())
    .then((pag)=>{
        display_poke(pag);
        url = pag.previous;
        if (url == null){
            ordenador_pokes.innerHTML=`<h2>"Error en la PókeDexx, refresca la página.</h2>`
        }
});
}

function cambio_pagina(){
    ordenador_pokes.innerHTML="";
    fetch(url)
    .then((pokes)=>pokes.json())
    .then((pag)=>{
        display_poke(pag);
        url = pag.next;

});
}
}