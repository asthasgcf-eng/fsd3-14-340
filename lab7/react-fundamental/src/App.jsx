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
      <h2>rs.{args.price}</h2>
      <h3>Author: {args.author}</h3>
    </>
  );
}



export default function App() {
  return (
  <>
    <h1>Hello React</h1>
    <Hello name="The Great Gatsby" price="$12.99" author="F. Scott Fitzgerald" />
    </>
    );
}