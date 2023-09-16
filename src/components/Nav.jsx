import styled from "styled-components";
import SearchBar from "./SearchBar";

const NavBar=styled.div`
`
export default function Nav(props){
    return(
        <NavBar>
        <button onClick={() => props.addRandomCharacter()}>Random</button>
        <SearchBar onSearch={props.onSearch} />
        </NavBar>
    );
}