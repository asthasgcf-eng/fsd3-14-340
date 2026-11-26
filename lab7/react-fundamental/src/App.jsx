// function must return single element
// <> </> is used to return multiple elements
// component - any js function returns html directly
// component can be called as html tag
// the tag must be closed
// component first character must be capital letter
function Hello(args){
  return (
    <>
      <h1>{args.name}</h1>
      <img src={args.image} alt={args.name} />
      <h2>rs.{args.price}</h2>
      <h3>Author: {args.author}</h3>
    </>
  );
}

export default function App() {
  const books = [
    {
      name: "The Great Gatsby",
      price: "$12.99",
      author: "F. Scott Fitzgerald",
      image: "the-great-gatsby.jpg"
    },
    {
      name: "To Kill a Mockingbird",
      price: "$9.99",
      author: "Harper Lee",
      image: "https://www.bing.com/images/search?view=detailV2&ccid=e90rU3ca&id=835543290C1B6269A9805645234C38C14DA54C1E&thid=OIF.6A65wSZ6DaPAVcR7etHuJA&mediaurl=https%3a%2f%2fcdn.britannica.com%2f21%2f182021-050-666DB6B1%2fbook-cover-To-Kill-a-Mockingbird-many-1961.jpg&exph=1600&expw=990&q=to+kill+a+mockingbird+&FORM=IRPRST&ck=E80EB9C1267A0DA3C055C47B7AD1EE24&selectedIndex=0&itb=0"
    }
  ];

  return (
  <>
    <h1>Hello React</h1>
    <Hello name="The Great Gatsby" price="$12.99" author="F. Scott Fitzgerald" image="the-great-gatsby.jpg" />
    <Hello name="To Kill a Mockingbird" price="$9.99" author="Harper Lee" image="to-kill-a-mockingbird.jpg" />
    <Hello {...books[0]} />
    {
      books.map((item) =><Hello {...item} />)
    }
    </>
    );
}