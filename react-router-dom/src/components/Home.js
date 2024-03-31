import React from 'react'
import './Home.css'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const photos =useLoaderData();
  return (
    <div className='Home'>
     <h1 className='title1'> Home ...!!</h1>
     {
      photos.map(photo =>(
        <div key={photo.id}>
          <p>Album:{photo.albumId}</p>
          <img  src={photo.url} alt=''/>

        </div>
  
      ))
     }

   
      
    </div>
  )
}

export const HomeLoader=async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  return data;
}

export default Home
