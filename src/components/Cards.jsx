import Card from './Card';

export default function Cards(props) {
   return (<div>
      {props.characters.map(({id, name, status, species, gender, origin, image})=>
      <Card 
         key={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
      />)
      }
   </div>)
}