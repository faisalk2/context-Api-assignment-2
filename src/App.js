import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products";
import Product from "./components/Product"


function App() {
  return (
    <div className="App">
      
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/products' element={<Products/>}></Route>
     <Route path='/products/:id' element={<Product/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
