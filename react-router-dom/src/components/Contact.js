import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
  const users=useLoaderData();
  return (
    
    <div>
      <h1> Mes Contacts 🧑‍🦰 :</h1>
      {
        users.map(user=>(
          <div key={user.id}>
            <h1>User:{user.id}</h1>
            <p>name:{user.name}</p>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>

          </div>

        ))}
    
      

    </div>


  )
}

export const ContactLoader=async()=>{

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;

}

export default Contact
