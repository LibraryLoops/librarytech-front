import { ChevronLeftIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import InputLogin from '../components/InputLogin'
import Button from '../components/Button'

const Register = () => {
  return (
    <section className="flex justify-center items-center flex-col bg-stone-900 h-screen w-screen">
    <div className='max-w-lg w-full h-auto'>
        <Link to="/" className='absolute top-10 left-10'>
            <ChevronLeftIcon className='size-7 text-gray-400 cursor-pointer' />
        </Link>
        <div className="w-full px-15">
            <div className="flex justify-center">
                <UserIcon className="text-white size-20" />
            </div>
            <form className="flex flex-col m-5 p-5">
                <p className="text-white text-center">Já tem uma conta? <Link to="/login"><span className="text-gray-500">Entrar</span></Link> </p>
                <InputLogin type="email" placeholder="Digite seu e-mail" required={true} />
                <InputLogin type="text" placeholder="Digite seu nome" required={true} />
                <InputLogin type="password" placeholder="Senha" required={true} />
                <Button>Cadastrar</Button>
            </form>
        </div>
    </div>
    </section>
  )
}

export default Register