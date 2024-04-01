import React from 'react'
import './Home.css'
import { useLoaderData, useNavigation } from 'react-router-dom';

const Contact = () => {
  const users=useLoaderData();
  const navigLoading =useNavigation();
  return navigLoading.state ==="loading"?( <h1>Loading...</h1>):
 (
    
    <div className="contact-container">
      <h1> Mes Contacts 🧑‍🦰 :</h1>
      {
        users.map(user=>(
          <div key={user.id} className="user-card">
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
