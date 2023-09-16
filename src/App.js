import styled from 'styled-components';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

const PrincipalDiv = styled.div`
   `

function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            const isCharacterAdded = characters.some(
              (char) => char.id === data.id
            );
            if (isCharacterAdded) {
              window.alert("¡El personaje ya ha sido agregado!");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    };
  
    const addRandomCharacter = () => {
      axios("https://rickandmortyapi.com/api/character").then(({ data }) => {
        const randomCharacter =
          data.results[Math.floor(Math.random() * data.results.length)];
        const isCharacterAdded = characters.some(
          (char) => char.id === randomCharacter.id
        );
        if (isCharacterAdded) {
          addRandomCharacter();
        } else {
          setCharacters((oldChars) => [...oldChars, randomCharacter]);
        }
      });
    };
  

   const onClose= (id) =>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }

   return (
      <PrincipalDiv>
         <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter}/>
         <Cards characters={characters} onClose={onClose} />
      </PrincipalDiv>
   );
}

export default App;
