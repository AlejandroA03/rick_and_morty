import styled from "styled-components";

const Tarjeta= styled.div`
   display: grid;
   border: 2px;
   width: 3em;`

export default function Card(props) {
   return (
      <Tarjeta>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </Tarjeta>
   );
}
