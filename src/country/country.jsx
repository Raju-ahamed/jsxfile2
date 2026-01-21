import { useState } from "react";
import"../App.css";
const Country=({country})=>{
    const { name, independent }=country;
    const [visited, setVisied]=useState(false);
    const handleClick=()=>{
        
        visited?setVisied(false):setVisied(true);
    }
 
    return(
        <div className={`country ${visited && 'country-visited'}`}>
            <p>country :{name} </p>
            <img src={country.flags.png} alt="" />
            <p> indpendence: {independent? "free": "not free"}</p>
            <button onClick={handleClick}>{
                visited?"visited":"Not Visited"}</button>
        </div>
    )
}
export default Country;