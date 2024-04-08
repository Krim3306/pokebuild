import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import FirstPokemons from './FirstPokemons';
import AllTypes from './AllTypes';
import WaterTypePokemons from './WaterTypePokemons';
import FireTypePokemons from './FireTypePokemons';
import GrassTypePokemons from './GrassTypePokemons';

function App() {
  return (
    <>
      <Header />
      <FirstPokemons />
      <AllTypes />
      <h2>Les Pokemons Par Type</h2>
      <WaterTypePokemons />
      <FireTypePokemons />
      <GrassTypePokemons />
      <Footer />
    </>
  );
}

export default App;
