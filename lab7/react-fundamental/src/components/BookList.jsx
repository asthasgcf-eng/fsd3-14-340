import {books} from "../Data.js";
import Book from "./Book.jsx";
const BookList = () => {
  return (
    <>
      {books.map((item) => (
        <Book key={item.name} {...item} />
      ))}
    </>
  );
};

export default BookList;