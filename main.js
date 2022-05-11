

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
        let titulo_pokemon = document.createElement("h2");
        titulo_pokemon.innerHTML=`${element.name}`;
        titulo_pokemon.setAttribute("class","titulo_pokemon")
        let boton_shiny = document.createElement("button");
        boton_shiny.innerHTML=`Shiny`;
        
            
        ordenador_pokes.append(carta);
        carta.append(titulo_pokemon);
        

        //cambiar url
        let url_poke=element.url;

        //foto princ del pokemon
        fetch(url_poke)
        .then((poke)=>poke.json())
        .then((into)=>{
            let foto = document.createElement("img");
            foto.setAttribute("src",`${into.sprites.front_default}`);
            carta.append(foto);

            foto.addEventListener("click",cambio_sprite);

            let contador_clicks=0;
            function cambio_sprite(){
                contador_clicks++;
                if(contador_clicks==1){
                    foto.setAttribute("src",`${into.sprites.back_default}`);
                }
                else if(contador_clicks==2){
                    foto.setAttribute("src",`${into.sprites.front_shiny}`);
                }
                else if(contador_clicks==3){
                    foto.setAttribute("src",`${into.sprites.back_shiny}`);
                }
                else if (contador_clicks>=4){
                    foto.setAttribute("src",`${into.sprites.front_default}`);
                    contador_clicks=0;
                }
            }


        

    });
    
});

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
}
