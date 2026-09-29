const b1={
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};



function Book(){
  return(
    <div>
      <img src="https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg"
      alt="Design Patterns React JS"
      />
      <h4>Rating: 5.0</h4>
    <h1>Let Us React</h1>
    <h2>Price: 765.0</h2>
    <h3>Quantity: 5</h3>
    </div>
  );
}

export default function App(){
  return(
    <>
    <h1>Hello React</h1>
    <h1>Hello React</h1>
     <Book/>
     <Book/>
     
     </> 
  );
}