import { Suspense } from 'react';
import './App.css'
import Countries from './country/countries'
const countryApi = async() => {
  const res=await fetch("/public/country.json")
    return (res.json());
}
function App() {
  const handelCountries = countryApi();
  
  return (
    <>
      <Suspense  fallback={<h1>Raju is Going to Travel All these Country.....</h1>}>
        <Countries handelCountries={handelCountries}></Countries>
      </Suspense>

    </>
  )
}

export default App

