import React from "react";
import { Link } from "react-router-dom";

const LoginTest = () => {
  return (
    <div>
      <Link to="/">
        <p>Voltar</p>
      </Link>
      <h2>Login test</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor maxime iure magnam eveniet reprehenderit sapiente aut labore harum necessitatibus cum!</p>
      <p>Não tem conta? faça seu <Link to='/cadastro'><span className='text-red-600'>cadastro!</span></Link></p>
    </div>
  );
};

export default LoginTest;
