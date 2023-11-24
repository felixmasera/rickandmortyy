import SearchBar from "../searchbar/SearchBar";
import "./nav.css"
import { Link } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        <div className="nav">
            
            <Link to= "/home">
            <button className="buton">Home</button>
            </Link>
            <Link to = "/about">
            <button className="buton">About</button>
            </Link>
            <Link to = "/favorites">
            <button className="buton">Favorites</button>
            </Link>
            <SearchBar onSearch={onSearch} />


            
        </div>
    )
}