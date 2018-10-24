let pokemonesCartas = "";

for ( var i = 0; i < pokemones.length; i ++){
    let tipos = "";
    for(var tipo = 0; tipo <pokemones[i].type.length; tipo ++) {
        tipos += `<div class="tipo">${pokemones[i].type[tipo]}</div>`
    }
    
    let debilidades = "";
    for(var debilidad = 0; debilidad <pokemones[i].weakness.length; debilidad ++) {
        debilidades += `<div class="debilidad">${pokemones[i].weakness[debilidad]}</div>`
    }


   pokemonesCartas += `<div class='pokemon'>
   <img src="${pokemones[i].ThumbnailImage}"/>
   <h2>${pokemones[i].name}</h2>
   
   <h3>TIPO DE POKEMON</h3>
   <div class="details">
   ${tipos}
   </div>

   <h3>DEBILIDAD DE POKEMON</h3>
   <div class="details">
   ${debilidades}
   </div>

   </div>`
}



document.getElementById('resultado').innerHTML = pokemonesCartas;

// Maneras de hacer strings
// "" ; ``; ''

