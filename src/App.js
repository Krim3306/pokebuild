// import logo from './logo.svg';
import './App.css';
// import Header from './Component/Header';
// import Footer from './Component/Footer';
// import FirstPokemons from './Component/FirstPokemons';
// import AllTypes from './Component/AllTypes';
// import WaterTypePokemons from './Component/WaterTypePokemons';
// import FireTypePokemons from './Component/FireTypePokemons';
// import GrassTypePokemons from './Component/GrassTypePokemons';
// import PokemonByTypes from './Component/PokemonByTypes';
// import RandomPokemon from './Component/RandomTeam';
// import FirstGeneration from './Component/FirstGeneration';
// import SecondGeneration from './Component/SecondGeneration';
// import ThirdGeneration from './Component/ThirdGeneration';
// import PokemonSearch from './Component/PokemonSearch';
// import PokemonResistanceByType from './Component/PokemonResistanceByType';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import HomePage from './Page/HomePage';
import FirstGenerationPage from './Page/FirstGenerationPage';
import GrassTypePokemonsPage from './Page/GrassTypePokemonsPage';
import PokemonByTypePage from './Page/PokemonByTypePage';
import PokemonResistanceByTypePage from './Page/PokemonResistanceByTypePage';
import PokemonSearchPage from './Page/PokemonSearchPage';
import RandomTeamPage from './Page/RandomTeamPage';
import WaterTypePokemonsPage from './Page/WaterTypePokemonsPage';
import FireTypePokemonsPage from './Page/FireTypePokemonsPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/FirstGenerationPage' element={<FirstGenerationPage />} />
          <Route path='/GrassTypePokemonsPage' element={<GrassTypePokemonsPage />} />
          <Route path='/FireTypePokemonsPage' element={<FireTypePokemonsPage />} />
          <Route path='/WaterTypePokemonsPage' element={<WaterTypePokemonsPage />} />
          <Route path='/PokemonByTypePage' element={<PokemonByTypePage />} />
          <Route path='/PokemonResistanceByTypePage' element={<PokemonResistanceByTypePage />} />
          <Route path='/PokemonSearchPage' element={<PokemonSearchPage />} />
          <Route path='/RandomTeamPage' element={<RandomTeamPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <PokemonResistanceByType /> */}
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
