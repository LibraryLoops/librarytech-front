import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import Button from "../components/Button";
import { createBook } from "../services/books";
import { AuthContext } from "../contexts/authContext";
import Book from "/book.png";
import SmallButton from "../components/SmallButton";

const RegisterBook = ({ book, usuarioId, onSuccess }) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [linkCapa, setLinkCapa] = useState("");
  const [editora, setEditora] = useState("");
  const [genero, setGenero] = useState("");
  const [paginas, setPaginas] = useState(null);
  const [errors, setErrors] = useState({});
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  const navigate = useNavigate();

  const { token, getInfoToken } = useContext(AuthContext);

  const handleSubmitBookInfo = async (e) => {
    e.preventDefault();

    const book = {
      titulo,
      autor,
      linkCapa,
      editora,
      genero,
      paginas,
    };

    const { id } = getInfoToken();
    usuarioId = id;

    try {
      const response = await createBook(usuarioId, book, token);
      setIsRegisterPopupOpen(true);
    } catch (err) {
      if (err.response && err.response.data) {
        const { status, errors } = err.response.data;

        if (status === "Erro de Validação") {
          const errorMessages = {};
          errors.forEach((error) => {
            errorMessages[error.field] = error.mensagem;
          });
          setErrors(errorMessages);
        } else {
          setErrors({ erro: "Um erro inesperado ocorreu." });
        }
      } else {
        setErrors({ erro: "Um erro inesperado ocorreu." });
      }
    }
  };

  const handleClosePopup = () => {
    setIsRegisterPopupOpen(false);
    navigate("/livros");
  };

  const handleAddAnotherBook = () => {
    setIsRegisterPopupOpen(false);
    setTitulo("");
    setAutor("");
    setLinkCapa("");
    setEditora("");
    setGenero("");
    setPaginas(null);
    setErrors({});
  };

  return (
    <section className="flex flex-col justify-center bg-stone-900 h-screen w-screen">
      <div className="w-full h-fit px-5 ">
        <Link to="/livros" className="absolute top-10 left-10">
          <ChevronLeftIcon className="size-7 text-gray-400 cursor-pointer" />
        </Link>

        <div className="w-full align-middle">
          <section className="flex place-items-center bg-stone-900 w-fit h-fit">
            <div className="bg-stone-800 rounded-lg self-center p-6">
              <h2 className="bg-stone-800 text-white rounded-md text-2xl text-left justify-center">
                Cadastrar Novo Livro
              </h2>
              <form
                className=" flex justify-between  items-center"
                onSubmit={handleSubmitBookInfo}
              >
                <div className="">
                  <label className="text-stone-400 block ml-4">
                    Título do Livro
                  </label>
                  <InputLogin
                    type="text"
                    placeholder="Digite o título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required={true}
                  />
                  <label className="text-stone-400 block ml-4">Autor</label>
                  <InputLogin
                    type="text"
                    placeholder="Digite seu autor"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    required={true}
                  />
                  <label className="text-stone-400 block ml-4">
                    Link da Imagem
                  </label>
                  <InputLogin
                    type="text"
                    placeholder="Digite o link da imagem"
                    value={linkCapa}
                    onChange={(e) => setLinkCapa(e.target.value)}
                    required={false}
                  />
                </div>
                <div>
                  <label className="text-stone-400 block ml-4">
                    Nome da Editora
                  </label>
                  <InputLogin
                    type="text"
                    placeholder="Digite o nome da editora"
                    value={editora}
                    onChange={(e) => setEditora(e.target.value)}
                    required={false}
                  />
                  <label className="text-stone-400 block ml-4">Gênero</label>
                  <InputLogin
                    type="text"
                    placeholder="Digite o gênero do livro"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required={false}
                  />
                  <label className="text-stone-400 block ml-4">
                    Páginas do Livro
                  </label>
                  <InputLogin
                    type="text"
                    placeholder="Digite o número de páginas"
                    value={paginas}
                    onChange={(e) => setPaginas(e.target.value)}
                    required={false}
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  {errors.paginas && (
                    <p className="text-red-500 font-bold text-center">
                      O campo de páginas precisa ser em formato de número
                    </p>
                  )}
                  <div className="flex flex-col items-center justify-center rounded-lg">
                    <img src={Book} className="text-white max-w-[35%]" />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      color="bg-slate-900"
                      rounded="rounded-lg"
                      type="submit"
                    >
                      Cadastrar
                    </Button>
                    <Link to="/livros">
                      <Button
                        color="bg-slate-600 hover:bg-red-500"
                        textColor="text-white"
                        size="large"
                        rounded="rounded-lg"
                      >
                        Voltar
                      </Button>
                    </Link>
                  </div>

                  {errors.general && (
                    <div className="text-red-500 mt-4">
                      <p>{errors.general}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      {isRegisterPopupOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className=" bg-slate-900 p-6 rounded-lg shadow-lg">
            <p className="text-xl text-white">Livro cadastrado com sucesso!</p>
            <div className="flex justify-start gap-4 mt-4">
              <SmallButton
                color="bg-slate-100 hover:bg-gray-700"
                textColor="text-slate-950"
                onClick={handleAddAnotherBook}
              >
                Adicionar mais livros
              </SmallButton>
              <SmallButton
                color="bg-gray-500 hover:bg-red-700"
                onClick={handleClosePopup}
              >
                Voltar
              </SmallButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegisterBook;
