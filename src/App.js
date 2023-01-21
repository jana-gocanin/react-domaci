import './App.css';
import NavBar from "./NavBar";
import React from "react";
import Dogs from './dogs';
import { useState } from "react";
import Cart from './cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import ContactForm from './contactForm';

function App() {

  const addToCart = (id) => {
    dogs.map((dog) => {
      if (dog.id === id) {
        dog.amount = dog.amount + 100;
        const a = cartNum + 100;
        setCartNum(a);
        if (dog.amount === 1) {
          updateCart(dog);
        } else {
          refreshCart();
        }

        console.log("dog id=", dog.id, "amount=", dog.amount);
      }
    }
    )
};
  const remFromCart = (id) => {
    dogs.map((dog) => {
      if (dog.id === id) {
        if (dog.amount > 0) {
          dog.amount = dog.amount - 100;
          const a = cartNum - 100;
          setCartNum(a);
          refreshCart();
          console.log("dog id=", dog.id, "amount=", dog.amount);
        } else {
          alert("Iznos za doniranje je 0.");
        }
      }
    });

  };

  const refreshCart = () => {
    const newDogs = dogs.filter((dog) => dog.amount > 0);
    setCartDogs(newDogs);
  };

  const updateCart = (dog) => {
    setCartDogs([...cartDogs, dog]);
  };



  const [dogs, setDogs] = useState([
    {
      id: 1,
      title: "Jedan pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 2,
      title: "Drugi pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 3,
      title: "Treci pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 4,
      title: "Cetvrti pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 5,
      title: "Peti pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 6,
      title: "Jedan pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 7,
      title: "Drugi pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 8,
      title: "Treci pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 9,
      title: "Cetvrti pas",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 10,
      title: "Peti pas",
      description: "Opis nekog psa",
      amount: 0
    }
  ]);

  const [cartNum, setCartNum] = useState(0);
  const [cartDogs, setCartDogs] = useState([]);

  //paginacija

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(3);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={<>
            <Dogs
              dogs={dogs}
              onAdd={addToCart}
              onRemove={remFromCart}
          
            />
            <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(dogs.length / dogsPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
                />
            
          </>
          }
        />
        <Route path="/cart" element={<><Cart cartDogs={cartDogs} /><ContactForm /></>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
