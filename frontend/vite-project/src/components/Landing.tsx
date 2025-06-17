import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Landing = () => {
  const [name,setName] = useState("");
    return (
    <div className="landing">
      <h1>Welcome to the Room Management System</h1>
      <p>Please enter your name to get started:</p>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
      <p>Your name is: {name}</p>
      <Link to={"/room/?name=${name}"} onClick={()=> {

      }}>Join Room</Link>
      <p>Use the navigation menu to explore different functionalities.</p>
        
      </div>

  
  );
}