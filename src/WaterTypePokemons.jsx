import { useState } from "react";

const WaterTypePokemons = () => {
    const [waterTypes, setwaterTypes] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setwaterTypes(data)
        console.log(data)
    });

    const firstThreeWaterPokemons = waterTypes.slice(0,3)

    return (
        <section className="section-type">
            <h3>Pokemon Eau</h3>
            <div className="div-type">
                {firstThreeWaterPokemons.map((pokemon) =>{
                    return (
                        <article className="article-type">
                            <h4>{pokemon.name}</h4>
                            <img className="img-pokemon" src={pokemon.image} alt="{pokemon.name}"></img>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default WaterTypePokemons;