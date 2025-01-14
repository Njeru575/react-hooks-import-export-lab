import React from "react";
import { username, city } from "../data/user";  
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Portfolio of {username}</h2>
      <p>City: {city}</p>
    </div>
  );
};

export default Home; 