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
import UserDropDown from "../components/dropDownUser";
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


  const getBooks = async () => {
    try {
      const data = await getAllBooks(token);
      setBooks(data)

      const userIds = [...new Set(data.map(book => book.usuarioId))];
      const userPromises = userIds.map(userId => getUserById(userId, token));
      const userResponses = await Promise.all(userPromises);
      const userMap = userResponses.reduce((acc, user) => {
        acc[user.id] = user.nome; 
        return acc;
      }, {});

      setUsers(userMap);
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  
  useEffect(() => {
    getBooks();
  }, [id])

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
        setBooks(books.filter(book => book.id !== bookToDelete)); 
      } catch (error) {
        console.error('Error deleting book:', error);
      }
      closeDeleteModal();
    }
  };


  const filterBooks = books.filter(book => 
    book.titulo.toLowerCase().includes(search.toLowerCase()) ||
    book.autor.toLowerCase().includes(search.toLowerCase())
  );

  const getUser = async () => {
    const user = await getUserById(id, token);
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, [token])

  const handleLogout = () => {
    removeToken();
    navigate('/');
  }
  
  // nao ta funcionando
  const handleBookUpdate = (updatedBook) => {
    setBooks(books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    ));
  };

  return (
    <section className="flex justify-between overflow-auto bg-stone-900 ">
       <Bars3Icon 
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className={`fixed top-10 left-4 z-50 p-2 text-white bg-sky-700 rounded-full cursor-pointer transition-transform duration-300 ${
          isSideBarOpen ? 'w-10 h-10' : 'w-8 h-8'
        }`}
        style={{ transform: isSideBarOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
      />
      <aside 
        className={`w-64  bg-stone-800 text-white flex-shrink-0 h-screen transition-transform duration-300 ${
          isSideBarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >        
      <div className="p-4 bg-stone-800">
      <Button
      onClick={closeSideBar}
      color="bg-red-500 hover:bg-red-600"
      tooltip="Fechar"
      size="small"
      className="absolute top-10 right-4 text-white rounded-full"    >
      X
    </Button>
        <Link className="flex justify-start mt-20" to="/">
        <ArrowLeftIcon className="h-10 w-10 text-zinc-900"/>
        <HomeIcon className="h-10 w-10 text-zinc-900"/>
        </Link>
        <h2 className="text-2xl text-sky-100 font-bold my-5 text-left">
         Olá, {user.nome}
        </h2>
        {/* <div className=""/> colocar um separador digno   */}
        
        <ul className="mt-4">
          <div className="flex items-start space-x-2">
          <div className="flex items-center py-1 px-1">
          <div className="flex items-center h-12 rounded-lg bg-slate-800 p-2 ml-1">
            <BookOpenIcon className=" p-2 h-12 w-12 text-slate-500" />
          </div>
          <Link to='/usuarios/livros' className="text-xl pl-2 text-nowrap text-slate-500">Meus livros</Link>
          </div>
          <Link to='/livros/novo' className="flex items-center h-12 rounded-l p-2 ml-4">    
          <Button size="" tooltip="Adicionar Livro" rounded="rounded-2xl">
          <PlusIcon className="h-8 w-8 text-slate-900 p-1" />
          </Button>
          </Link>
          </div>      
          </ul>
          <section className="flex flex-col gap-2 bg-stone-800 p-2 rounded-lg overflow-hidden">
    {books
    .filter(book => book.usuarioId === id) 
    .map(book => (
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
         </div>
         </aside>
         <main className="flex-1 bg-stone-900 p-6 flex flex-col">
         <div className="absolute top-10 right-5 flex items-center space-x-2">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-700">
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

        <section className="flex flex-col">
        <div className="flex justify-center items-center h-20">
          <SearchForm 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} />
          <Link to="/livros/novo">
            <SmallButton icon={iconPlus}>Novo livro</SmallButton>
          </Link>
        </div>
        </section>
        <section className="mx-10 flex-wrap gap-5 bg-stone-800 p-6 grid grid-cols-4 rounded-lg">
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
      ): (
        <div className="text-center col-span-4">
        <p className="text-xl text-white">Nenhum livro encontrado. Adicione um novo livro para começar!</p>
      </div>
      )}
        </section>
        </main>

        {isEditOpen && currentBook && (
        <BookEdit 
        book={currentBook} 
        closeEdit={closeEditInput} 
        onBookUpdate={handleBookUpdate}  /> // esse onBookUpdate nao ta funcionando
        )}
        {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
        <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
        <p className="text-xl text-white">Você tem certeza que deseja excluir este livro?</p>
        <div className="flex justify-start gap-4 mt-4">
        <SmallButton color="bg-red-500 hover:bg-red-700" onClick={handleConfirmDelete}>
          Confirmar
        </SmallButton>
        <SmallButton color="bg-gray-500 hover:bg-gray-700" onClick={closeDeleteModal}>
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
