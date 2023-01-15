import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/Booklist";

function App() {
  const [books, setBooks] = useState([
    { id: 10, title: "Harry Potter" },
    { id: 12, title: "Game Of Thrones" },
    { id: 11, title: "Alice in Borderland" },
  ]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    }); 

    setBooks(updatedBooks);

  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
    <h1>Reading List</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
