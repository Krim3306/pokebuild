import { useEffect, useState } from "react";

const RandomPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/random/team")
            .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPokemons(data)
            console.log(data)
        });
    },[])  

    return (
        <section className="section-random-team">
            <h2>Equipe Pokémon Aléatoire</h2>
            <div className="container-random-team">
                {pokemons.map((pokemon) =>{
                    return (
                        <article className="sous-container-random-team">
                                <h3>{pokemon.name}</h3>
                                <img className="img-random-team" src={pokemon.image} alt="{pokemon.name}"></img>
                            <div>
                                <p>Attaque : {pokemon.stats.attack}</p>
                                <p>Defence : {pokemon.stats.defense}</p>
                                <p>Attaque Spécial : {pokemon.stats.special_attack}</p>
                                <p>Desfence Spécial : {pokemon.stats.special_defense}</p>
                                <p>Vitesse : {pokemon.stats.speed}</p>
                            </div>
                            {pokemon.apiTypes.map((pokemonType) => {
                                return (
                                    <div>
                                        <p>{pokemonType.name}</p>
                                        <img className="img-pokemon" src={pokemonType.image} alt="{pokemonType.name}"></img>
                                    </div>
                                )
                            })}
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default RandomPokemon;