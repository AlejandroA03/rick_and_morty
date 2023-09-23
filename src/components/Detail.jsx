import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const [character, setCharacter]= useState({})
    const {id}= useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <h1>Deatil</h1>

            <h2>{character.name}</h2>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin && character.origin.name}</h3>
            <img src={character.image} alt="" />
        </div>
    )
}

export default Detail;