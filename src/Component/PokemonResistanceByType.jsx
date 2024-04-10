import { useEffect, useState } from "react";

const PokemonResistanceByType = (() => {

    const [pokemonsForType, setPokemonsForType] = useState([]);

    const submitedType = (event) => {
        event.preventDefault()
        const targetedPokemon = event.target.type.value
        console.log(targetedPokemon);

        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + targetedPokemon)
        .then((response) => {
             return response.json();
        })
        .then((data) => {
            setPokemonsForType(data)
            console.log(data)
        });
    }

    const [types, setType] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
        .then((response) => {
             return response.json();
        })
        .then((data) => {
            setType(data)
            console.log(data)
        });
    },[]) 

    return (
        <section>
            <form onSubmit={submitedType}>
                <select name="type">
                    {
                        types.map((type) => {
                            return(
                                <option value={type.name}>{type.name}</option>
                            )
                        })
                    }
                </select>
                <input type="submit"></input>
            </form>
            {
                pokemonsForType.map((pokemon) => {
                    return (
                            <article>
                            <h3>{pokemon.name}</h3>
                            <img className="img-type" src={pokemon.image} alt="{pokemon.name}"></img>
                        </article>
                    )
                })
            // )
            }
        </section>
    )
})

export default PokemonResistanceByType;