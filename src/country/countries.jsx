import React, { use } from 'react';
import Country from './country';
import '../App.css'

const Countries = ({ handelCountries }) => {
    const countries = use(handelCountries);


    return (
        <div className='center'>
            <div>
                <h1>Raju Traveling:{countries.length}</h1>
            </div>
            <div className='colum'>{
                countries.map(country => <Country country={country}></Country>)
            }</div>
        </div>
    );
};

export default Countries;