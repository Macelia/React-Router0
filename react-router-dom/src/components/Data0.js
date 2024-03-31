import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Data0 = () => {
    const dataL = useLoaderData();

    return (
      <div>
         <h1>Weather info:</h1>
         <p>name:{dataL.name}</p>
        <p>Coord - Longitude: {dataL.coord.lon}, Latitude: {dataL.coord.lat}</p>
  
        <p>Country: {dataL.sys.country}</p>
        <p>sunrise:{dataL.sys.sunrise}</p>
        <p>sunset:{dataL.sys.sunset}</p>
        <p>Description: {dataL.weather[0].description}</p>
          
      </div>
    )
  }

  export const Data0Loader=async()=>{

    const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bejaia&appid=c903b7d6744c8082cc9128515b603b72');
    const data = await response.json()
    return data;
  
  }

export default Data0
