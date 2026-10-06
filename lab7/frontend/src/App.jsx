import Book from "./components/Book";
import Pen from "./components/Pen";
import {books} from "./data/Books"; 
import {pens} from "./data/pens";
import Fruits from "./components/Fruits";

export default function App(){
  
  return(
    <>
    <h1>Online Book Store</h1>
    <div className="container">
      <Book book={books[0]}/>
      <Book book={books[1]}/>
      <Book book={books[0]}/>
      <Book book={books[1]}/>
      <Pen pen={pens[0]}/>
      <Pen pen={pens[1]}/>
      <Fruits/>
    </div>
    </>
  );
}