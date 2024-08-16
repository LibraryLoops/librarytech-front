import React from "react";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import SmallButton from "../components/SmallButton";
import {
  ArrowRightEndOnRectangleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BookPage = () => {
  const iconLogout = (
    <ArrowRightEndOnRectangleIcon className="h-6 w-6 text-white" />
  );
  const iconPlus = <PlusCircleIcon className="h-6 w-6" />;
  return (
    <section className="bg-stone-900">
      <div className="absolute top-5 right-5">
        <SmallButton color="bg-red-700 hover:bg-red-500" icon={iconLogout}>
          Logout
        </SmallButton>
      </div>
      <section className="flex flex-col">
        <h1 className="text-5xl text-sky-100 font-bold my-5 text-center">
          Acervo de Livros
        </h1>
        <Link
          to="/livros/novo"
          className="flex justify-center items-center h-20"
        >
          <SearchForm />
          <SmallButton icon={iconPlus}>Novo livro</SmallButton>
        </Link>
      </section>
      <section className=" mx-10 flex-wrap gap-5 bg-stone-800 p-6 grid grid-cols-4 rounded-lg">
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
    </section>
  );
};

export default BookPage;
