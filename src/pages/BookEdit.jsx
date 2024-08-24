import React, { useState, useEffect, useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { updateBook } from '../services/books'; 
import { AuthContext } from '../contexts/authContext';

const BookEdit = ({ book: initialBook, closeEdit, onBookUpdate  }) => {

  const [titulo, setTitulo] = useState(initialBook.titulo || '');
  const [autor, setAutor] = useState(initialBook.autor || '');
  const [linkCapa, setLinkCapa] = useState(initialBook.linkCapa || '');
  const [editora, setEditora] = useState(initialBook.editora || '');
  const [genero, setGenero] = useState(initialBook.genero || '');
  const [paginas, setPaginas] = useState(initialBook.paginas || null);
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      titulo === initialBook.titulo &&
      autor === initialBook.autor &&
      linkCapa === initialBook.linkCapa &&
      editora === initialBook.editora &&
      genero === initialBook.genero &&
      paginas === initialBook.paginas
    ) {
      setMessage('Nenhuma alteração foi feita.');
      return;
    }

    try {
    const updatedBook = await updateBook(initialBook.id, token, { titulo, autor, linkCapa, editora, genero, paginas });
    onBookUpdate(updatedBook);
      closeEdit(); 
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  useEffect(() => {
    if (initialBook) {
      setTitulo(initialBook.titulo || '');
      setAutor(initialBook.autor || '');
      setLinkCapa(initialBook.linkCapa || '');
      setEditora(initialBook.editora || '');
      setGenero(initialBook.genero || '');
      setPaginas(initialBook.paginas || '');
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
        <div className='flex flex-col gap-1'>
            <label htmlFor="titulo" className="font-medium text-xl text-gray-700">Título</label>
            <input
              id="titulo"
              type="text"
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título"
              className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="autor" className="text-xl font-medium text-gray-700">Autor</label>
            <input
              id="autor"
              type="text"
              name="autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              placeholder="Autor"
              className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="linkCapa" className="text-xl font-medium text-gray-700">Link da Capa</label>
            <input
              id="linkCapa"
              type="text"
              name="linkCapa"
              value={linkCapa || ""}
              onChange={(e) => setLinkCapa(e.target.value)}
              placeholder="Link da Capa"
              className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="paginas" className="text-xl font-medium text-gray-700">Número de páginas</label>
            <input
              id="paginas"
              type="text"
              name="paginas"
              value={paginas || ''}
              onChange={(e) => setPaginas(e.target.value)}
              placeholder="Número de páginas"
              className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="editora" className="text-xl font-medium text-gray-700">Editora</label>
            <input
              id="editora"
              type="text"
              name="editora"
              value={editora || ''}
              onChange={(e) => setEditora(e.target.value)}
              placeholder="Editora"
              className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="genero" className="text-xl font-medium text-gray-700">Gênero</label>
            <input
              id="genero"
              type="text"
              name="genero"
              value={genero || ''}
              onChange={(e) => setGenero(e.target.value)}
              placeholder="Gênero"
              className="h-14 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"            />
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
          className="h-11 px-4 bg-slate-600 border border-transparent rounded-lg text-lg placeholder-zinc-400 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent hover:bg-slate-200 text-zinc-400"          >
            Voltar
          </button>
          </div> 
        </form>
      </div>
    </div>
  );
};

export default BookEdit;
