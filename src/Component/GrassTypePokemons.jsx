import { useEffect, useState } from "react";

const GrassTypePokemons = () => {
    const [GrassTypes, setGrassTypes] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Plante")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setGrassTypes(data)
            console.log(data)
        });
    },[]) 

    const firstThreeGrassPokemons = GrassTypes.slice(0,3)

    return (
        <section className="section-type">
            <h3>Pokemon Plante</h3>
            <div className="div-type">
            {firstThreeGrassPokemons.map((pokemon) =>{
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

export default GrassTypePokemons;