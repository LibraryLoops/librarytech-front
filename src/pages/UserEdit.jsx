import { ChevronLeftIcon, UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import Button from "../components/Button";
import { updateUser } from "../services/usuarios";
import decoderToken from "../utils/decoderToken";



const UserEdit = () => {
  const token = localStorage.getItem('token');
  const {id} = decoderToken(token);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      email,
      nome: name,
      reputacao: 5.0
    };

    try {
      const response = await updateUser(id, user, token);
      alert(response.message)
      navigate('/livros')
    } catch (err) {
      setError(err.response.data.errors);
    }
    
  };

  return (
    <section className="flex justify-center items-center flex-col bg-stone-900 h-screen w-screen">
      <div className="max-w-lg w-full h-auto">
        <Link to="/" className="absolute top-10 left-10">
          <ChevronLeftIcon className="size-7 text-gray-400 cursor-pointer" />
        </Link>
        <div className="w-full px-15">
          <div className="flex justify-center">
            <UserIcon className="text-white size-20" />
          </div>
          <form className="flex flex-col m-5 p-5" onSubmit={handleRegister}>

            <InputLogin
              type="email"
              placeholder="Digite seu e-mail"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLogin
              type="text"
              placeholder="Digite seu nome"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button rounded='rounded-lg' size='large'>Cadastrar</Button>
            {error && error.map((err, index) => (
              <p key={index} className="text-red-600 font-bold text-center">{err.mensagem}</p>
            ))}
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserEdit;
