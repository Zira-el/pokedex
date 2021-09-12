import React, {useState} from 'react';
import './styles.css';

function MiniCards({dados}) {
    const [shiny, setShiny] = useState([]);



    function handleFilterShiny(e, pokemon) {
        if(e.target.checked){
            const sorte = [...shiny, pokemon];
            sorte.sort((a,b) => {
                if (a > b) return 1;
                if (a < b) return -1
                return 0
            })

            setShiny(sorte)
        } else {
            const sorte = [...shiny]
            console.log(sorte)
            const i = sorte.findIndex(id => id === pokemon)
            sorte.splice(i, 1);
            setShiny(sorte)
        }
    }

    return(
        <div className='container'>
            {dados.map((pokemon, index) => (
                <div className='cards flex-column'>
                    <div className='numero flex-row content-end'>
                        <span style={{color: 'red'}}>#000{pokemon.id}</span>
                    </div>

                    <div className='container-imagem flex-column content-center items-center'>
                        <img src={shiny.find(IdPokemon => pokemon.id === IdPokemon  ) ? pokemon.sprites.front_shiny: pokemon.sprites.front_default }   alt='Pokemon' className='imagem'/>
                        <input 
                        type='checkbox' 
                        key={dados.id}
                        onChange={(e) => { handleFilterShiny(e, pokemon.id)}}
                        />
                    </div>

                    <div className='rodape flex-column content-center'>
                        <div className='nome'> 
                            <span>{pokemon.name.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default MiniCards;