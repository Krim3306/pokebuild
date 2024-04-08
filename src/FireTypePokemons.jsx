import { useState } from "react";

const FireTypePokemons = () => {
    const [FireTypes, setFireTypes] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setFireTypes(data)
        console.log(data)
    });

    const firstThreeFirePokemons = FireTypes.slice(0,3)

    return (
        <section className="section-type">
            <h3>Pokemon Feu</h3>
            <div className="div-type">
                {firstThreeFirePokemons.map((pokemon) =>{
                return (
                    <article className="article-type">
                        <h4>{pokemon.name}</h4>
                        <img className="img-pokemon" src={pokemon.image} alt="{pokemon.name}"></img>
                    </article>
                )})}
            </div>
            
        </section>
    )
}

export default FireTypePokemons;