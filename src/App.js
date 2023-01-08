import './App.css';
import NavBar from "./NavBar";
import React from "react";
import Dogs from './dogs';
import { useState } from "react";

function App() {

  const addToCart = (id) => {
    dogs.map((dog) => {
      if (dog.id === id) {
        dog.amount = dog.amount + 100;
        const a = cartNum + 100;
        setCartNum(a);
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
          console.log("dog id=", dog.id, "amount=", dog.amount);
        } else {
          alert("Iznos za doniranje je 0.");
        }
      }
    });

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
  ]);

  const [cartNum, setCartNum] = useState(0);

  return (
    <div className="App">
      <NavBar cartNum={cartNum} />
      <Dogs dogs={dogs} onAdd={addToCart} onRemove={remFromCart} />
    </div>

  );
}

export default App;
