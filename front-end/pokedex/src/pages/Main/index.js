import React, { useEffect, useState } from 'react';
import './styles.css';
import MiniCards from '../../components/MiniCards';
import Pokeball from '../../assets/pokebola.png'
import pokedex from '../../services/PokeAPI';

function Main() {
  const [pokemons, setPokemons] = useState([]);

  async function dadosPokemons() {
    const dados = await pokedex();
    setPokemons(dados);
  }
  
  useEffect(() => {
    dadosPokemons();
  }, [])

  return (
    <div className="App">

      <div className='flex-column'>
        <div className='flex-row content-center items-center top'>
          <div className='pokebola-div'>
            <img src={Pokeball} alt='pokebola' className='pokebola'/>
          </div>
          <div className='poppins-bold'> 
            <h1 className='titulo' >Pokedex</h1>
          </div>
        </div>
        <div className='barraPesquisa'>
          <input placeholder='Pesquisa' type='text' className='pesquisa'/>
        </div>
      </div>
   
        <MiniCards 
        dados={pokemons} 
        />
     
    </div>
  );
}

export default Main;
