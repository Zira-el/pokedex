import React, {useState, useEffect} from 'react';
import './styles.css';

function MiniCards({dados, page}) {
    const [shiny, setShiny] = useState([]);
    console.log(dados)

    if(dados.length === 1 && shiny.find(id => id !== dados[0].id)){
        setShiny([]);
        return
    }

    function handleFilterShiny(e, pokemon) {
        if(e.target.checked){
            const ids = [...shiny, pokemon];
            setShiny(ids)
        } else {
            const ids = [...shiny]
            const i = ids.findIndex(id => id === pokemon)
            ids.splice(i, 1);
            setShiny(ids)
        }
        return
    }

    useEffect(() => {
        let observer = new IntersectionObserver((fim) => {
           if(fim.some(entrada => entrada.isIntersecting)){
                page();
           }
        });
        
        let target = document.querySelector('#final');
        observer.observe(target);
        return () => observer.disconnect();
    }, [])

    return(
        <div className='geral'>
            
            <div className='container'>
                {dados.map((pokemon, index) => (
                    <div className='cards flex-column'>
                        <div className='numero flex-row content-end'>
                            <span style={{color: 'red'}}>#{("0000" + pokemon.id).slice(-4)}</span>
                        </div>

                        <div className='container-imagem flex-column content-center items-center'>
                            <img src={shiny.find(IdPokemon => pokemon.id === IdPokemon  ) ? pokemon.sprites.front_shiny: pokemon.sprites.front_default }   alt='Pokemon' className='imagem'/>
                        </div>

                        <div>
                        <input 
                            type='checkbox' 
                            key={pokemon.id}
                            onChange={(e) => { handleFilterShiny(e, pokemon.id)}}
                            />
                        <span style={{color: 'orangered'}}>Shiny</span>
                        </div>

                        <div className='rodape flex-column content-center'>
                            <div className='nome'> 
                                <span>{pokemon.name.toUpperCase()}</span>
                            </div>
                        </div>
                        
                    </div>
                ))}
                <div id="final">
            </div>
            </div>
            
        </div>
    )
}

export default MiniCards;