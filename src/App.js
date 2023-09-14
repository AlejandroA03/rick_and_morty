import styled from 'styled-components';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

const PrincipalDiv = styled.div`
   background-color: #8ca0ff`

function App() {
   return (
      <PrincipalDiv>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </PrincipalDiv>
   );
}

export default App;
