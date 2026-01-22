import React, { use, useState } from 'react';
import Country from './country';
import '../App.css'

const Countries = ({ handelCountries }) => {
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
                <ol>
                    {visitedCountry.map(country => <li>{country.name}</li>)}
                </ol>
            </div>
            <div className='colum'>{
                countries.map(country => <Country handlerVisitedCountry={handlerVisitedCountry} country={country}></Country>)
            }</div>
        </div>
    );
};

export default Countries;