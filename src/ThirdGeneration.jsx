import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

const ThirdGeneration = () => {
    const [thirdGeneration, setThirdGeneration] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/3")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setThirdGeneration(data)
            console.log(data)
        });
    },[])  

    const starterPerGenerationPokemons = thirdGeneration.slice(0,9)

    return (
        <section  className="section-trois-starter">
        <h2>Les Starters Troisième Génération</h2>
        <Pokemon starterPerGenerationPokemons={starterPerGenerationPokemons}/>
        </section> 
    )
}

export default ThirdGeneration;