import styled from "styled-components";
import { useState } from "react";

const SearchB= styled.div`
   `

export default function SearchBar(props) {

   const [id, setId]= useState("")

   const handleChange= (event) => {
      setId(event.target.value)
   }

   return (
      <SearchB>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </SearchB>
   );
}
