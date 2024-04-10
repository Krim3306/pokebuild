import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

const SecondGeneration = () => {
    const [secondGeneration, setSecondGeneration] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/2")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setSecondGeneration(data)
            console.log(data)
        });
    },[])  

    const starterPerGenerationPokemons = secondGeneration.slice(0,9)

    return (
        <section  className="section-trois-starter">
        <h2>Les Starters Seconde Génération</h2>
        <Pokemon starterPerGenerationPokemons={starterPerGenerationPokemons}/>
        </section> 
    )
}

export default SecondGeneration;