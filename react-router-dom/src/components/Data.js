import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'

const Data = () => {
    const DogUrl=useLoaderData();
    const navigation =useNavigation();
     return navigation.state==='loading'?( <h1>Loading...</h1>):
       
    
    // à la place de useEffect on utilise useLoaderData
    
  (
    <div>
        <img src={DogUrl} alt=''/>
    </div>
  )
}

export const  DataLoader=async()=>{
   
     
            const response = await fetch('https://random.dog/woof.json');
             const data = await response.json();
             return data.url;

    
}

export default Data
