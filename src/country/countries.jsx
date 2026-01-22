import React, { use, useState } from 'react';
import Country from './country';
import '../App.css'


const Countries = ({ handelCountries }) => {
    const [clickedFlag, setClickedFlag] = useState([])
    const handleFlagClick=(flag)=>{
        const newFlag=[...clickedFlag,flag]
        setClickedFlag(newFlag);
    }
    const countries = use(handelCountries);
    const [visitedCountry,setVisitedCountry]= useState([]);
    const handlerVisitedCountry=(country)=>{
        const newVisitedCountry = [...visitedCountry,country];
        setVisitedCountry(newVisitedCountry);
        
    }


    return (
        <div className='center'>
            <div>
                <h1>Raju Traveling:{countries.length}</h1>
                <h2>Raju Traveling country:{visitedCountry.length}</h2>
                <p>{clickedFlag.map(flag=><li>visite Flag:<img src={flag}></img></li>)}</p>
                <ol>
                    {visitedCountry.map(country => <li>{country.name}</li>)}
                </ol>
            </div>
            <div className='colum'>{
                countries.map(country => <Country handleFlagClick={handleFlagClick} handlerVisitedCountry={handlerVisitedCountry} country={country}></Country>)
            }</div>
        </div>
    );
};

export default Countries;