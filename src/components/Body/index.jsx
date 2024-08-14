import React from 'react'
import BodyButton from './BodyButton'
import booksImage from '/books.png'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <main className='flex justify-between pl-40 mt-10'>
        <div className='max-w-[70%] justify-self-center text-left px-[10%] mt-20'>
            <h1 className='text-white text-4xl'>
                Transforme seus livros em novas oportunidades de leitura
            </h1>
            <p className='text-white text-lg my-4'>
                Faça troca de livros com o Library Tech
            </p>
            <Link to='/cadastro'>
                <BodyButton>Cadastre-se</BodyButton>
            </Link>
        </div>
        <div className='justify-self-end'>
            <img src={booksImage} className='max-h-[60vh]' />
            <span className='sr-only'>Uma elipse com uma estante de livros</span>
        </div>
    </main>
  )
}

export default Body