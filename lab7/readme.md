# Frontend - Backend
1. create project folder (lab7)
2. create frontend , backend folder within project folder
3. open terminal and split into two
4. open frontend to the left side terminal
5. open backend to the right side terminal
6. in backend
   a. initialize backend by `npm init -y`
   b. install nodemon by 1npm i nodemon`
   c. open package.json from backend , update `type to module` and script
7. in frontend
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. select variant as javascript from arrow key
   e. select eslist for linking from arrow key
   f. select install and start the frontend

## Components
1. Simple JS function returns html directly
2. it must starts with capital letter
3. it should be treated as html tag
4. it must be closed 
5. it must be single use

## Object Distructure
* Example: line no.18: const{bname,price,quantity,rating, picUrl}=props.book;
* Does Not depend on order, if property is not available then it initializes with null.
\\const {price, picUrl}= props.book;
const {price, ..rest}=props.book;
return rest;
* Any components include style:
1. External CSS= create class in index.css and use in component.
2. Internl CSS= create property as object like:
```
const qtyStyle={
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"lightblue",
    padding:"10px",
  };
```
then apply that style attribute and pass the object

3. Inline CSS= in this method we use two curly brackets with style attributes;
all the css property must be single word.
* for example: text-align becomes textAlign

### rafce=> arrow function
### rfce=> normal function


### app.jsx must be in minimum code

* By default button in html is submit button.

## add tailwind to existing react project
1. open terminal and go to project frontend folder
2. install tailwind by 
`npm install tailwindcss @tailwindcss/vite` 
3. open vite.config.js
4. add `import tailwindcss from "@tailwindcss/vite";` in first line
5. add `tailwindcss()` after react()
6. the file should look like

``` import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
 ```

7. open src/index.css and remove all contents, then add below line
   ` @import "tailwindcss";` 
