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

function App() {
  return (
    <>
      <Header />
      <FirstPokemons />
      <AllTypes />
      <WaterTypePokemons />
      <FireTypePokemons />
      <GrassTypePokemons />
      <PokemonByTypes type = {"Normal"} />
      <Footer />
    </>
  );
}

export default App;
