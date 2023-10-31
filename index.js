console.log("simo")
async function getNamesPokemon(){
    try {
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const jsonPokemonData = await pokemonData.json();
        console.log(jsonPokemonData.results);
        const ulElement=document.querySelector("#list")
        jsonPokemonData.results.forEach(async(pokemon) => {
            const pokemonData1 = await fetch(pokemon.url)
            const jsonPokemonData1 = await pokemonData1.json();
            console.log(jsonPokemonData1.sprites);
            const liElement= document.createElement("li")
            liElement.innerHTML= `<h2 id="${pokemon.name}" >${pokemon.name}</h2>
            <img src="${jsonPokemonData1.sprites.front_shiny}">`
            ulElement.appendChild(liElement)
        });
        
    } catch (error) { console.log("error!!")
    }
}

getNamesPokemon()