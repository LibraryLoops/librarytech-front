import React from 'react'
import HeaderButton from './HeaderButton'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  return (
    <header className='w-full h-auto pt-12 px-20 flex justify-end items-center gap-8 pb-10'>
        <Link to='/login'>
          <p className='text-white text-lg cursor-pointer hover:underline'>
              Entrar
          </p>
        </Link>
        <Link to='/cadastro'>
          <HeaderButton>
              Cadastre-se
          </HeaderButton>
        </Link>
    </header>
  )
}

export default Header