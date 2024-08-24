import React, { useContext, useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import SmallButton from "../components/SmallButton";
import {
  Bars3Icon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  PlusCircleIcon,
  PlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../services/usuarios";
import { deleteBook, getAllBooks } from "../services/books";
import BookEdit from "./BookEdit";
import UserDropDown from "../components/DropDownUser";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import BookList from "../components/BookList";
import Button from "../components/Button";

const BookPage = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [currentBook, setCurrentBook] = useState(null);
  const iconPlus = <PlusCircleIcon className="h-6 w-6" />;

  const { token, getInfoToken, removeToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState({});
  const { id } = getInfoToken();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [isScreenMd, setIsScreenMd] = useState(window.innerWidth >= 768);

  const getBooks = async () => {
    try {
      const data = await getAllBooks(token);
      setBooks(data);

      const userIds = [...new Set(data.map((book) => book.usuarioId))];
      const userPromises = userIds.map((userId) => getUserById(userId, token));
      const userResponses = await Promise.all(userPromises);
      const userMap = userResponses.reduce((acc, user) => {
        acc[user.id] = user.nome;
        return acc;
      }, {});

      setUsers(userMap);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [id]);

  const openEditInput = (book) => {
    setCurrentBook(book);
    setIsEditOpen(true);
  };

  const closeEditInput = () => {
    setIsEditOpen(false);
    setCurrentBook(null);
  };

  const openDropDown = () => {
    setIsDropDownOpen(true);
  };

  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenMd(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isScreenMd) {
      setIsSideBarOpen(true); 
    } else {
      setIsSideBarOpen(false); 
    }
  }, [isScreenMd]);

  const openDeleteModal = (bookId) => {
    setBookToDelete(bookId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setBookToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (bookToDelete) {
      try {
        await deleteBook(bookToDelete, token);
        setBooks(books.filter((book) => book.id !== bookToDelete));
      } catch (error) {
        console.error("Error deleting book:", error);
      }
      closeDeleteModal();
    }
  };

  const filterBooks = books.filter(
    (book) =>
      book.titulo.toLowerCase().includes(search.toLowerCase()) ||
      book.autor.toLowerCase().includes(search.toLowerCase())
  );

  const getUser = async () => {
    const user = await getUserById(id, token);
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, [token]);

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  const handleBookUpdate = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  useEffect(() => {
    getBooks();
  }, [currentBook]);

  return (
    <section className="flex overflow-hidden bg-stone-900 ">
      {isSideBarOpen && (
        <aside
          className={`w-64 bg-stone-800 text-white flex-shrink-0 h-screen transition-transform duration-300 ${isSideBarOpen ? "translate-x-0" : "-translate-x-64"
            }`}
        >
          <div className="p-4 mt-3 bg-stone-800">
            <Button
              onClick={closeSideBar}
              color="bg-red-500 hover:bg-red-600"
              tooltip="Fechar"
              size="small"
              top="14"
              className="absolute top-10 right-4 text-white rounded-full"
            >
              X
            </Button>
            <Link className="flex justify-start mt-20" to="/">
              <ArrowLeftIcon className="h-10 w-10 text-gray-400" />
              <HomeIcon className="h-10 w-10 text-gray-400" />
            </Link>
            <h2 className="text-2xl text-sky-100 font-bold my-5 text-left">
              Olá, {user.nome}
            </h2>

            <ul className="mt-4">
              <div className="flex items-start space-x-2">
                <div className="flex items-center py-1 px-1">
                  <div className="flex items-center h-12 rounded-lg bg-slate-800 p-2 ml-1">
                    <BookOpenIcon className=" p-2 h-12 w-12 text-slate-500" />
                  </div>
                  <Link
                    to="/usuarios/livros"
                    className="text-xl pl-2 text-nowrap text-slate-500"
                  >
                    Meus livros
                  </Link>
                </div>
                <Link
                  to="/livros/novo"
                  className="flex items-center h-12 rounded-l p-2 ml-4"
                >
                  <Button
                    size=""
                    tooltip="Adicionar Livro"
                    rounded="rounded-2xl"
                  >
                    <PlusIcon className="h-8 w-8 text-slate-900 p-1" />
                  </Button>
                </Link>
              </div>
            </ul>
            <section className="flex flex-col gap-2 bg-stone-800 p-2 rounded-lg overflow-hidden">
              {books
                .filter((book) => book.usuarioId === id)
                .map((book) => (
                  <div key={book.id} className="flex items-start mb-4 ">
                    <BookList
                      imageUrl={book.linkCapa}
                      title={book.titulo}
                      author={book.autor}
                      rating={book.avaliacao}
                      user={users[book.usuarioId]}
                      showDeleteButton={book.usuarioId === id}
                      onEdit={() => openEditInput(book)}
                      onDelete={() => handleDelete(book.id)}
                    />
                  </div>
                ))}
            </section>
            <div className="lg:hidden p-4 mt-40 bg-stone-800">
              <a
                href="#configuracoes"
                className="block px-4 py-2 text-sm text-slate-400 hover:text-sky-400"
              >
                Configurações
              </a>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-red-500 hover:text-sky-400 w-full text-left cursor-pointer"
              >
                Sair
              </button>
            </div>
          </div>
        </aside>
      )}
      <main className={`flex-1 transition-all duration-300 bg-stone-900 p-6 flex flex-col`}>
        <section className="flex flex-col">
          <div className="flex justify-center items-center gap-8">
            <div>
              <Bars3Icon
                onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                className={`fixed top-14 left-4 z-50 p-2 text-white bg-sky-700 rounded-full cursor-pointer transition-transform duration-300 ${isSideBarOpen ? "w-10 h-10" : "w-8 h-8"
                  }`}
                style={{ transform: isSideBarOpen ? "rotate(0deg)" : "rotate(180deg)" }}
              />
            </div>
            <SearchForm
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Link to="/livros/novo">
              <SmallButton icon={iconPlus}>Novo livro</SmallButton>
            </Link>
            <div className="top-10 right-5 hidden lg:flex items-center space-x-2">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-700 ml-3">
                <UserCircleIcon className="h-8 w-8 text-sky-700" />
              </div>
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-stone-800">
                {isDropDownOpen ? (
                  <ChevronUpIcon
                    onClick={() => closeDropDown()}
                    className="h-5 w-5 text-sky-700 cursor-pointer"
                  />
                ) : (
                  <ChevronDownIcon
                    onClick={() => openDropDown()}
                    className="h-5 w-5 text-sky-700 cursor-pointer"
                  />
                )}
                {isDropDownOpen && (
                  <UserDropDown
                    isOpen={isDropDownOpen}
                    closeDropDownMenu={closeDropDown}
                    logOut={() => handleLogout()}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="mx-4 sm:mx-6 md:mx-12 p-4 sm:p-6 bg-stone-800 rounded-lg">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
            {filterBooks.length > 0 ? (
              filterBooks.map((book) => (
                <div key={book.id}>
                  <BookCard
                    imageUrl={book.linkCapa}
                    title={book.titulo}
                    author={book.autor}
                    rating={book.avaliacao}
                    user={users[book.usuarioId]}
                    showDeleteButton={book.usuarioId === id}
                    onEdit={() => openEditInput(book)}
                    onDelete={() => openDeleteModal(book.id)}
                  />
                </div>
              ))
            ) : (
              <div className="text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
                <p className="text-xl text-white">
                  Nenhum livro encontrado. Adicione um novo livro para começar!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {isEditOpen && currentBook && (
        <BookEdit
          book={currentBook}
          closeEdit={closeEditInput}
          onBookUpdate={handleBookUpdate}
        />
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
          <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-xl text-white mb-4">
              Você tem certeza que deseja excluir este livro?
            </p>
            <div className="flex justify-start gap-4 mt-4">
              <SmallButton
                color="bg-red-500 hover:bg-red-700"
                onClick={handleConfirmDelete}
              >
                Confirmar
              </SmallButton>
              <SmallButton
                color="bg-gray-500 hover:bg-gray-700"
                onClick={closeDeleteModal}
              >
                Cancelar
              </SmallButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookPage;
