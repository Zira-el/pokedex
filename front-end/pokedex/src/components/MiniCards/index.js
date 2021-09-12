import React from 'react';
import './styles.css';

function MiniCards({dados}) {
    console.log(dados)
    return(
        <div className='container'>
            {dados.map(pokemon => (
                <div className='cards flex-column'>
                    <div className='numero flex-row content-end'>
                        <span style={{color: 'red'}}>#000{pokemon.id}</span>
                    </div>

                    <div className='container-imagem flex-column content-center items-center'>
                        <img src={pokemon.sprites.front_default} alt='Pokemon' className='imagem'/>
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