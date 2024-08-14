import React from 'react'
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <header className='w-full h-auto pt-12 px-20 flex justify-end items-center gap-8 pb-10'>
        <p className='text-white text-lg cursor-pointer hover:underline'>
            Entrar
        </p>
        <HeaderButton>
            Cadastre-se
        </HeaderButton>
    </header>
  )
}

export default Header