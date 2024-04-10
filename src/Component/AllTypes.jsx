import { useEffect, useState } from "react";

const AllTypes = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setTypes(data)
            console.log(data)
        });
    },[]) 

    return (
        <section className="section-all-type">
            <h2>Les Pokemons Par Type</h2>
            <h3>Tout Les Types Pokemon</h3>
            <div className="container-all-type">
                {types.map((pokemon) =>{
                    return (
                        <article className="sous-container-all-type">
                                <h4>{pokemon.name}</h4>
                                <img className="img-type" src={pokemon.image} alt="{pokemon.name}"></img>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default AllTypes;