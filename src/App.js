import './App.css';
import NavBar from "./NavBar";
import React, {useState} from "react";
import Cart from './cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './contactForm';
import Home from './home';



function App()  {
  const [cartDogs, setCartDogs] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={<Home cartDogs={cartDogs} setCartDogs={setCartDogs} cartNum={cartNum} setCartNum={setCartNum} />
          }
        />
        <Route path="/cart" element={<><Cart cartDogs={cartDogs} /><ContactForm /></>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
