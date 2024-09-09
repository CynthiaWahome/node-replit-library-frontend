const BookList = ({ books, fetchBooks}) => {
  return (
    <div>
      <h2>All Books</h2>
      <button onClick={fetchBooks}>Get All Books</button>
      <ul>
        {books.map((eachBook) => (
        <li key={eachBook.id}>
          {eachBook.id}) {eachBook.title} - {eachBook.author} 
        </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;