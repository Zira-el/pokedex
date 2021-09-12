
async function pokedex() {
    let retornoPokemon = []

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`, {
            method: 'GET'
        });
    
        const {results} = await response.json();
    
        for (const {url} of results){
            const pokemons = await fetch(url, {
                method: 'GET'
            });
            const pokemon = await pokemons.json();
            retornoPokemon.push(pokemon);
        }

        return retornoPokemon;
    } catch (error) {
        return false;
    }

}


export default pokedex;