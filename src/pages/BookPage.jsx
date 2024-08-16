import React, { useContext, useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import SmallButton from "../components/SmallButton";
import {
  ArrowRightEndOnRectangleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { getUserById } from "../services/usuarios";

const BookPage = () => {
  const iconLogout = <ArrowRightEndOnRectangleIcon className="h-6 w-6 text-white" />
  const iconPlus = <PlusCircleIcon className="h-6 w-6" />;

  const navigate = useNavigate();
  const { token, getInfoToken, removeToken } = useContext(AuthContext);
  const { id, email } = getInfoToken();
  const [user, setUser] = useState({});

  const getUser = async () => {
    const user = await getUserById(id, token);
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, [id])

  const handleLogout = () => {
    removeToken();
    navigate('/');
  }

  return (
    <section className="bg-stone-900">
      <div className="absolute top-5 right-5">
        <SmallButton color="bg-red-700 hover:bg-red-500" icon={iconLogout} onClick={handleLogout}>
          Logout
        </SmallButton>
      </div>
      <section className="flex flex-col">
        <h1 className="text-5xl text-sky-100 font-bold my-5 text-center">
          Acervo de Livros
        </h1>
        <h2 className="text-2xl text-sky-100 font-bold my-5 text-center">
          Olá, {user.nome}
        </h2>
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
