import React, { useContext, useState } from 'react'
import InputLogin from '../components/InputLogin'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { AuthContext } from '../contexts/authContext'
import { loginAuth } from '../services/login'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { storageToken } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginAuth({ email, password });
        if (token) {
            storageToken(token.accessToken);
            navigate('/livros');
        } else {
            alert('Email ou senha incorretos');
        }
    }

    return (
        <section className="flex justify-center items-center flex-col bg-gray-900 h-screen w-screen">
            <Link to="/">
                <ChevronLeftIcon className='size-7 text-gray-400 absolute top-5 left-5 cursor-pointer' />
            </Link>
            <div className="w-[75%] px-20">
                <div className="flex justify-center">


                </div>
                <form onSubmit={handleSubmit} className="flex flex-col h-2 m-5 p-5">
                    <p className="text-white text-center">Não tem uma conta? <Link to="/cadastro"><span className="text-gray-500">Criar conta</span></Link> </p>

                    <InputLogin type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="E-mail" />
                    <InputLogin type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Senha" />
                    <button className="text-white bg-blue-400 rounded-md" type='submit'>Enviar</button>
                </form>


            </div>




        </section>
    )
}

export default Login