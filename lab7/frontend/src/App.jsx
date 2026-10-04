import Book from "./components/Book";
import Pen from "./components/Pen";
const b1={
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2={
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"The Road to React",
  price: 2886,
  quantity: 5,
  rating: 4.5,
};

const p1={
  picUrl: "https://m.media-amazon.com/images/I/31VRPe1bjzL._AC_UL480_FMwebp_QL65_.jpg",
  company:"Pilot",
  price: 4670,
};

const p2={
  picUrl: "https://m.media-amazon.com/images/I/41eBfPGQOzL._AC_UL480_FMwebp_QL65_.jpg",
  company:"Trimax",
  price: 2099,
};

export default function App(){
  
  return(
    <>
    <h1>Online Book Store</h1>
    <div className="container">
      <Book book={b1}/>
      <Book book={b2}/>
      <Book book={b1}/>
      <Book book={b2}/>
      <Pen pen={p1}/>
      <Pen pen={p2}/>
      <Pen pen={p1}/>
      <Pen pen={p2}/>
    </div>
    </>
  );
}