import React from 'react';
import FilterCategory from '../components/FilterCategory';
import SearchForm from '../components/SearchForm';
import BookCard from '../components/BookCard';

const BookPage = () => {
  return (
    <>
      <section className='flex flex-col bg-stone-700'>
        <h1 className="text-7xl text-sky-50 font-bold mb-5 mt-5">Acervo de Livros</h1>
        <div>
          <SearchForm />
        </div>
        <div className='flex justify-center '>
          <FilterCategory nameFilter="Todos" imageUrl="https://picsum.photos/200" />
          <FilterCategory nameFilter="Fantasia" imageUrl="https://picsum.photos/200" />
          <FilterCategory nameFilter="Ficção" imageUrl="https://picsum.photos/200" />
          <FilterCategory nameFilter="Romance" imageUrl="https://picsum.photos/200" />
          <FilterCategory nameFilter="Manga" imageUrl="https://picsum.photos/200" />
        </div>
      </section>
      <section className="mt-8 mx-10 justify-center flex flex-wrap  gap-3 bg-stone-700">
        <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
        <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
        <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
                <BookCard
          imageUrl="https://picsum.photos/200"
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          rating={4}
        />
      </section>
    </>
  )
}

export default BookPage;