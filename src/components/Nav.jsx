import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar=styled.div`
`
export default function Nav(props){
    return(
        <NavBar>
        <button onClick={() => props.addRandomCharacter()}>Random</button>
        <Link to={"/home"}>
         <button>Home</button>
        </Link>
        <Link to={"/about"}>
         <button>About</button>
        </Link>
        <SearchBar onSearch={props.onSearch} />
        </NavBar>
    );
}