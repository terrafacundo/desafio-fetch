

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

llamar_pokemones(150);

//tarjetas
let contenedor_pokes= document.getElementById("contenedor_pokes");

function creador_tarjetas(x){
    let contenedor = document.createElement("div");
    let contenedor_parte_atras = document.createElement("div");


    //declaracion
    let nombre = document.createElement("h3");
    let indice =document.createElement("h3");
    let foto =document.createElement("div");
    let sprite= document.createElement("img");


    //asignacion
    nombre.innerHTML=`${x.name}`;
    indice.innerHTML=`#${x.id}`;
    //coloreo de tarjeta
    let tipo_pokemon=x.types.map(el=>el.type.name)
    let tipo_color = llaves_colores.find(x => tipo_pokemon.indexOf(x)>-1);
    let color = colours[tipo_pokemon];

    let contenedor_stat=document.createElement("div");
    let barra_progreso = document.createElement("div");
    let stat1 = document.createElement("div");
        stat1.innerHTML=`Hp ${x.stats[0].base_stat}`;
    let stat2 = document.createElement("div");
        stat2.innerHTML=`Attack ${x.stats[1].base_stat}`;
    let stat3 = document.createElement("div");
        stat3.innerHTML=`Defense ${x.stats[2].base_stat}`;
    let stat4 = document.createElement("div");
        stat4.innerHTML=`Special-Attack: ${x.stats[3].base_stat}`;
    let stat5 = document.createElement("div");
        stat5.innerHTML=`Speed: ${x.stats[5].base_stat}`;

    //funcion progreso

    
    //impresion
    contenedor_pokes.append(contenedor)
    foto.append(sprite);
    contenedor_stat.append(stat1,stat2,stat3,stat4,stat5);
    contenedor.append(nombre,indice,foto,contenedor_stat);

    //atributos
    nombre.setAttribute("class","titulo_pokes");
    indice.setAttribute("class","indice")
    contenedor.setAttribute("class","carta")
    contenedor.style.backgroundColor=color;
    contenedor_stat.setAttribute("class","contenedor_stats");
    foto.setAttribute("class","foto_contenedor_poke");
    sprite.setAttribute("src",`${x.sprites.front_default}`);
    sprite.setAttribute("class","sprite");  
    stat1.setAttribute("class","stats");
    stat2.setAttribute("class","stats");
    stat3.setAttribute("class","stats");
    stat4.setAttribute("class","stats");
    stat5.setAttribute("class","stats")
    




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
    

}



}