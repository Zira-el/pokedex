import React from 'react';
import './styles.css';
import exemplo from '../../assets/pokebola.png';


function MiniCards() {
    return(
        <div className='container'>
            <div className='cards flex-column'>
                <div className='numero flex-row content-end'>
                    <span style={{color: 'red'}}>#0001</span>
                </div>

                <div className='container-imagem flex-column content-center items-center'>
                    <img src={exemplo} alt='Pokemon' className='imagem'/>
                </div>

                <div className='rodape flex-column content-center'>
                    <div className='nome'> 
                        <span>Pokebola</span>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default MiniCards;