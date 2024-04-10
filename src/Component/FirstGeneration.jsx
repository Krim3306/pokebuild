import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

const FirstGeneration = ({generationNumber}) => {
    const [firstGeneration, setFirstGeneration] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + generationNumber)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setFirstGeneration(data)
            console.log(data)
        });
    },[])  

    const starterPerGenerationPokemons = firstGeneration.slice(0,9)

    return (
        <section  className="section-trois-starter">
            <h2>Les Starters Génération {generationNumber}</h2>
            <Pokemon starterPerGenerationPokemons={starterPerGenerationPokemons}/> 
        </section>     
    )
}

export default FirstGeneration;