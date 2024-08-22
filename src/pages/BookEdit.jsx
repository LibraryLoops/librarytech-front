import React, { useState, useEffect, useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { updateBook } from '../services/books'; 
import { AuthContext } from '../contexts/authContext';

const BookEdit = ({ book: initialBook, closeEdit, onBookUpdate  }) => {

  const [titulo, setTitulo] = useState(initialBook.titulo || '');
  const [autor, setAutor] = useState(initialBook.autor || '');
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const updatedBook = await updateBook(initialBook.id, token, { titulo, autor });
    onBookUpdate(updatedBook); // nao ta funcionando
      closeEdit(); 
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  useEffect(() => {
    if (initialBook) {
      setTitulo(initialBook.titulo || '');
      setAutor(initialBook.autor || '');
    }
  }, [initialBook]);

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-lg bg-slate-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-semibold text-slate-500'>Editar Livro</h2>
            <button onClick={closeEdit}>
              <XMarkIcon className='h-7 w-10 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>Atualize as informações do livro</p>
        </div>

        <form className='space-y-3' onSubmit={handleSubmit}>
          <div className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg flex items-center gap-2">
            <div/>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 px-4 bg-slate-600 border border-transparent rounded-lg flex items-center gap-2">
              <div/>
              <input
                type="text"
                name="autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                placeholder="Autor"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <div className='flex justify-start gap-2'>
          <button
            type="submit"
            className='bg-slate-400 text-sky-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-slate-200'
          >
            Salvar alterações
          </button>
          <button
          type='button'
          onClick={closeEdit}
           className='bg-slate-800 text-sky-50 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-slate-700'
          >
            Voltar
          </button>
          </div> 
        </form>
      </div>
    </div>
  );
};

export default BookEdit;
