import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import FirstPokemons from './FirstPokemons';
import AllTypes from './AllTypes';
import WaterTypePokemons from './WaterTypePokemons';
import FireTypePokemons from './FireTypePokemons';
import GrassTypePokemons from './GrassTypePokemons';
import PokemonByTypes from './PokemonByTypes';
import RandomPokemon from './RandomTeam';
import FirstGeneration from './FirstGeneration';
import SecondGeneration from './SecondGeneration';
import ThirdGeneration from './ThirdGeneration';
import PokemonSearch from './PokemonSearch';
import PokemonResistanceByType from './PokemonResistanceByType';

function App() {
  return (
    <>
      <Header />
      <PokemonResistanceByType />
      {/* <PokemonSearch />
      <AllTypes />
      <RandomPokemon />
      <FirstPokemons />
      <FirstGeneration generationNumber = {1} />
      <FirstGeneration generationNumber = {2} />
      <FirstGeneration generationNumber = {3} />
      <FirstGeneration generationNumber = {4} />
      <FirstGeneration generationNumber = {5} />
      <FirstGeneration generationNumber = {6} />
      <FirstGeneration generationNumber = {7} />
      <FirstGeneration generationNumber = {8} />
      <SecondGeneration />
      <ThirdGeneration />
      <WaterTypePokemons />
      <FireTypePokemons />
      <GrassTypePokemons />
      <PokemonByTypes type = {"Normal"} />
      <Footer /> */}
    </>
  );
}

export default App;
