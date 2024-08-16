import { ChevronLeftIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import InputLogin from '../components/InputLogin'
import Button from '../components/Button'

const RegisterBook = () => {
  return (
    <section className="flex justify-center items-center flex-col bg-stone-900 max-h-screen w-screen">
    <div className='max-w-lg w-full h-auto'>
        <Link to="/livros" className='absolute top-10 left-10'>
            <ChevronLeftIcon className='size-7 text-gray-400 cursor-pointer' />
        </Link>
        <div className="w-full">
            <div className="flex justify-center">
                <BookOpenIcon className="text-white size-20" />
            </div>
            <form className="flex flex-col m-5">
                <p className="text-white text-center uppercase">Cadastro de novo livro</p>
                <InputLogin type="text" placeholder="Digite o título" required={true} />
                <InputLogin type="text" placeholder="Digite seu autor" required={true} />
                <InputLogin type="text" placeholder="Digite o link da imagem" required={false} />
                <InputLogin type="text" placeholder="Digite o nome da editora" required={false} />
                <InputLogin type="text" placeholder="Digite o gênero do livro" required={false} />
                <InputLogin type="text" placeholder="Digite o número de páginas" required={false} />
                <Button>Cadastrar</Button>
            </form>
        </div>
    </div>
    </section>
  )
}

export default RegisterBook