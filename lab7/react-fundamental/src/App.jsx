// function must return single element
// <> </> is used to return multiple elements
// component - any js function returns html directly
// component can be called as html tag
// the tag must be closed
// component first character must be capital letter

import Booklist from "./components/BookList.jsx";
export default function App() {

  return (
  <>
    <h1>Hello React</h1>
    <Booklist />
    </>
    );
}