import { useState } from 'react';
import axios from 'axios';
import './App.css';
import BookList from './components/BookList';

axios.defaults.baseURL = "https://46c02a64-23e3-414a-bca7-58a80c8db2df-00-3cpbtytslpj6y.worf.replit.dev";
  
export default function App() {
  const [books, setBooks] = useState([]);
  
  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books");
      const fetchedBooks = response.data.map((bookObj) => bookObj.value);
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  // console.log(fetchBooks());

  return (
    <main className='app'>
      <h1>Book Library</h1>
      <hr/>

      <div>
        <div className="left-side">
          <BookList books={books} fetchBooks={fetchBooks} />
        </div>
      </div>
    </main>
  );
}
