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

function Book(props){
  const{bname,price,quantity,rating, picUrl}=props.book;
  return(
    <div className="book">
      <img src={picUrl}
      alt={bname}
      />
    <h1>{bname}</h1>
    <h2>Price: {price}</h2>
    <h3>Quantity: {quantity}</h3>
    <h4>Rating: {rating}</h4>
    <button>Buy Now</button>
    </div>
  );
}

export default function App(){
  
  return(
    <>
    <h1>Online Book Store</h1>
    <div className="container">
      <Book book={b1}/>
      <Book book={b2}/>
      <Book book={b1}/>
      <Book book={b2}/>
      
    </div>
    </>
  );
}