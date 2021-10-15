import httpClient from "./httpClient";

const END_POINT = "/api/books";

const getAll = () => httpClient.get(`${END_POINT}/all`);
const getBookByTitle = (title) => httpClient.get(`${END_POINT}/title/${title}`);
const insertBook = (book) => httpClient.post(`${END_POINT}`, book);
const updateBook = (id, data) => httpClient.put(`${END_POINT}/id/${id}`, data);
const deleteBook = (id) => httpClient.delete(`${END_POINT}/id/${id}`);

export { 
    getAll,
    getBookByTitle,
    insertBook,
    updateBook,
    deleteBook
}