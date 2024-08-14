import React from "react";
import { Link } from "react-router-dom";

const LoginTest = () => {
  return (
    <div className="bg-gray-500 h-screen">
      <Link to="/">
        <p>Home</p>
      </Link>
      <h2 className="text-3xl mb-32">Login test</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor maxime iure magnam eveniet reprehenderit sapiente aut labore harum necessitatibus cum!</p>
      <p>Não tem conta? faça seu <Link to='/cadastro'><span className='text-indigo-800 font-bold'>cadastro!</span></Link></p>
    </div>
  );
};

export default LoginTest;
