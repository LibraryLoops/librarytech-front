import React from 'react'
import Button from '../Button'
import booksImage from '/books.png'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <main className='flex justify-between pl-40 mt-10'>
         <div className='text-center lg:text-left max-w-xl lg:max-w-2xl px-4 lg:px-0'>
            <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold'>
                Transforme seus livros em novas oportunidades de leitura
            </h1>
            <p className='text-white text-lg my-4'>
                Faça troca de livros com o Library Tech
            </p>
            <Link to='/cadastro'>
                <Button>Cadastre-se</Button>
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