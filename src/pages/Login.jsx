import React, { useContext, useState } from 'react'
import InputLogin from '../components/InputLogin'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { AuthContext } from '../contexts/authContext'
import { loginAuth } from '../services/login'
import { UserIcon } from '@heroicons/react/24/outline'
import Button from '../components/Button'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { storageToken } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await loginAuth({ email, password });
                storageToken(token.accessToken);
                navigate('/livros');            
        } catch (err) {
            setError("Email ou senha inválidos");
        }
    }

    return (
        <section className="flex justify-center items-center flex-col bg-stone-900 h-screen w-screen">
            <div className='max-w-lg w-full h-auto'>
                <Link to="/" className='absolute top-10 left-10'>
                    <ChevronLeftIcon className='size-7 text-gray-400 cursor-pointer' />
                </Link>
                <div className="w-full px-20">
                    <div className="flex justify-center">
                        <UserIcon className="text-white size-20" />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col m-5 p-5">
                        <p className="text-white text-center">Não tem uma conta? <Link to="/cadastro"><span className="text-gray-500">Criar conta</span></Link> </p>

                        <InputLogin type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="E-mail" />
                        <InputLogin type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Senha" />
                        <Button>Entrar</Button>
                        {error && <p className="text-red-600 font-bold text-center">{error}</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login