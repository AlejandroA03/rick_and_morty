import Card from './Card';
import styled from 'styled-components';

const Container= styled.div`
   `

export default function Cards(props) {
   const {characters, onClose}= props;
   return (
   <Container>
      {characters.map((char) => {
         return(
            <Card 
               key={char.id}
               id={char.id}
               name={char.name}
               status={char.status}
               species={char.species}
               gender={char.gender}
               origin={char.origin.name}
               image={char.image}
               onClose={onClose}
            />)})
      }
   </Container>)
}
