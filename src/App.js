import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const PrincipalDiv = styled.div`
   `


const access = {
  email: "prueba@hola.com",
  password: "123456",
  isLoged: false
}

function App() {

   const [characters, setCharacters] = useState([])

   const {pathname} = useLocation()

   const navigate= useNavigate()

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

  const login = (data) => {

    if (data.email=== access.email && data.password=== access.password){
      navigate("/home")
      access.isLoged= true
    } else{
      window.alert("Usuario o contraseña incorrectos")
    }
  }
  
  useEffect(() =>{
    !access.isLoged && navigate("/")
  }, [navigate])

  const onClose= (id) =>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }

   return (
      <PrincipalDiv>
         {pathname!=="/" && <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter}/>}
         
         <Routes>
            <Route path='/' element={<Form loginUser={login}/>}/>
            <Route path='/home' 
            element={
              <Cards characters={characters} onClose={onClose} />} 
            />
            <Route path='/about'
            element={ <About />}
            />
            <Route path='/detail/:id'
            element={<Detail />}
            />
            <Route path='*' element={<h1>404 Not Found</h1>}/>
         </Routes>
      </PrincipalDiv>
      
   );
  };

export default App;
