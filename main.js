

function init(){
    //funcion base c/ el fetch
function llamar_pokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(x=>x.json())
    .then(datos=>{
        creador_tarjetas(datos);
    }
    );}


function llamar_pokemones(numero){
    for(i=1;i<numero;i++){
        llamar_pokemon(i);
    }
}

llamar_pokemones(50);

//tarjetas
let contenedor_pokes= document.getElementById("contenedor_pokes");

function creador_tarjetas(x){
    let contenedor = document.createElement("div");
    //declaracion
    let nombre = document.createElement("h3");
    let indice =document.createElement("h3");
    let foto =document.createElement("div");
    let sprite= document.createElement("img");
    //asignacion
    
    nombre.innerHTML=`${x.name}`;
    indice.innerHTML=`#${x.id}`;

    //atributos
    nombre.setAttribute("class","titulo_pokes");
    indice.setAttribute("class","indice")
    contenedor.setAttribute("class","carta");
    foto.setAttribute("class","foto_contenedor_poke");
    sprite.setAttribute("src",`${x.sprites.front_default}`);
    sprite.setAttribute("class","sprite");
    

    //impresion
    contenedor_pokes.append(contenedor);
    foto.append(sprite);
    contenedor.append(nombre,indice,foto);

    //comportamientos
    foto.addEventListener("click",seleccion_sprites);
    let contador_clicks=0;
    function seleccion_sprites(){
        contador_clicks++;
        if(contador_clicks==1){
            sprite.setAttribute("src",`${x.sprites.back_default}`);
        }
        else if(contador_clicks==2){
            sprite.setAttribute("src",`${x.sprites.front_shiny}`);
        }
        else if(contador_clicks==3){
            sprite.setAttribute("src",`${x.sprites.back_shiny}`);
        }
        else{
            sprite.setAttribute("src",`${x.sprites.front_default}`);
            contador_clicks=0;
        }

    }

    //coloreo de tarjeta

}



}