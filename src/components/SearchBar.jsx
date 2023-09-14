import styled from "styled-components";

const SearchB= styled.div`
   `

export default function SearchBar(props) {
   return (
      <SearchB>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </SearchB>
   );
}
