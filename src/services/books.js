import api from "../utils/api";

export const getAllBooks = async (token) => {
  const response = await api.get("/livros", {
    headers: {
      //   'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getBookById = async (bookId, token) => {
  const response = await api.get(`/livros/${bookId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createBook = async (usuarioId, book, token) => {
  try {
    const response = await api.post(`/usuarios/${usuarioId}/livros`, book, {
      headers: {
        //   'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const deleteBook = async (bookId, token) => {
  await api.delete(`/livros/${bookId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateBook = async (bookId, token, bookData) => {
  try {
    const response = await api.put(`/livros/${bookId}`, bookData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};
