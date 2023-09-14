import Card from './Card';
import styled from 'styled-components';

const Container= styled.div`
   display: grid;
   grid: auto-flow 80px;`

export default function Cards(props) {
   return (<Container>
      {props.characters.map(({id, name, status, species, gender, origin, image})=>
      <Card 
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
      />)
      }
   </Container>)
}
