import React, { useEffect, useState } from 'react';
import './styles.css';
import MiniCards from '../../components/MiniCards';
import Pokeball from '../../assets/pokebola.png'
import pokedex from '../../services/PokeAPI';

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('');
  const [nome, setNome] = useState('');
  let contador = 0;

  function handleNextPage() {
    setPage(contador);
    contador = contador + 6
  }

  function handleNome(e) {
    if(e.key !== 'Enter') return
    contador = 0;
    console.log("o contador é", contador);
    setNome(search);
    setPokemons([])
    setPage(0)
  }

  async function dadosPokemons(e) {
    setNome('');
    if(!nome){
      setPokemon([]);
    }
    console.log(page);
    const dados = await pokedex(page);
    setPokemons([...pokemons, ...dados]);
  }

  async function nomePokemon() {
    const dados = await pokedex(nome.toLocaleLowerCase())
    setPokemon([dados])
  }
  
  useEffect(() => {
    if(!nome){
      dadosPokemons();
      return
    }

    if(nome){
      nomePokemon();
      return
    }
    
  }, [nome, page])

  
  return (
    <div className="App">

      <div className='flex-column'>
        <div className='flex-row content-center items-center top'>
          <div className='pokebola-div'>
            <img src={Pokeball} alt='pokebola' className='pokebola'/>
          </div>
          <div className='poppins-bold'> 
            <h1 className='titulo'>Pokedex</h1>
          </div>
        </div>
        <div className='barraPesquisa'>
          <input 
           placeholder='Pesquisar pokemon' 
           type='text' 
           className='pesquisa'
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           onKeyDown={(e) => handleNome(e)}
           />
        </div>
      </div>
   
        <MiniCards 
        dados={nome ? pokemon : pokemons} 
        page={handleNextPage}
        />

        
    </div>
  );
}

export default Main;
