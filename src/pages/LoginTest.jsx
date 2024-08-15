import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "../services/login";
import { AuthContext } from "../contexts/authContext";

const LoginTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { storageToken } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginAuth({ email, password });
    if(token) {
      storageToken(token.accessToken);
      navigate('/livros');
    } else {
      alert('Email ou senha incorretos');
    }
  }

  return (
    <div className="bg-gray-500 h-screen">
      <Link to="/">
        <p>Home</p>
      </Link>
      <h2 className="text-3xl mb-32">Login test</h2>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-fit">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}} 
          />
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}} 
          /> 
          <button type="submit">Entrar</button>
        </form>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor maxime iure magnam eveniet reprehenderit sapiente aut labore harum necessitatibus cum!</p>
      <p>Não tem conta? faça seu <Link to='/cadastro'><span className='text-indigo-800 font-bold'>cadastro!</span></Link></p>
    </div>
  );
};

export default LoginTest;
