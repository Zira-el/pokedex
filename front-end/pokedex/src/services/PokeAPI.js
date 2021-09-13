
async function pokedex(parametro) {
    let retornoPokemon = [];   
    try {
        if(parseInt(parametro, 10) || parametro === 0){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${parametro}`, {
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
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`, {
            method: 'GET'
        });

        retornoPokemon = await response.json();
        console.log(retornoPokemon)
        return retornoPokemon;
        
    } catch (error) {
        return false;
    }

}


export default pokedex;