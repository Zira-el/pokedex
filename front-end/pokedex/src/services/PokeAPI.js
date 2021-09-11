
async function pokedex() {
    let retornoPokemon = [];

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`, {
        method: 'GET'
    });

    const data = await response.json();

    data.results.forEach(async link => {
        const pokemons = await fetch(`${link.url}`, {
            method: 'GET'
        });

        const pokemon = await pokemons.json();
        retornoPokemon.push(pokemon)
    });

        console.log(retornoPokemon)
}


export default pokedex;