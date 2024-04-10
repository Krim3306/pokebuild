import { useEffect, useState } from "react";

const FirstPokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
            .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPokemons(data)
            console.log(data)
        });
    },[]) 

    const firstHundredPokemons = pokemons.slice(0,9)

    return (
        <section className="section-trois-starter">
            <h2>Les Trois Starters</h2>
            <div className="container-trois-starter">
            {firstHundredPokemons.map((pokemon) =>{
                return (
                    <article key={pokemon.id} className="sous-container-trois-starter">
                            <h3>{pokemon.name}</h3>
                            <img className="img-type" src={pokemon.image} alt="{pokemon.name}"></img>
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

export default FirstPokemons;