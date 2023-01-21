import React, {useState} from 'react'
import Dogs from './dogs'
import ReactPaginate from 'react-paginate'

const Home = ({cartDogs, setCartDogs, cartNum, setCartNum}) => {
    const dogsPerPage = 5;
  const [dogs, setDogs] = useState([
    {
      id: 1,
      title: "Mimi",
      description: "Mlada i vesela kuca",
      amount: 0
    },
    {
      id: 2,
      title: "Kiki",
      description: "RAZIGRANA",
      amount: 0
    },
    {
      id: 3,
      title: "Bleki",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 4,
      title: "Mici",
      description: "Voli ljude",
      amount: 0
    },
    {
      id: 5,
      title: "Rex",
      description: "Ceka svoj dom",
      amount: 0
    },
    {
      id: 6,
      title: "Max",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 7,
      title: "Rea",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 8,
      title: "Ares",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 9,
      title: "Bibi",
      description: "Opis nekog psa",
      amount: 0
    },
    {
      id: 10,
      title: "Lili",
      description: "Opis nekog psa",
      amount: 0
    }
  ]);

  
  const [currentPage, setCurrentPage] = useState(1);
  
  const addToCart = (id) => {
    setDogs(dogs.map((dog) => {
      if (dog.id === id) {
        dog.amount = dog.amount + 100;
        const a = cartNum + 100;
        setCartNum(a);
        if (dog.amount === 100) {
          updateCart(dog);
        } else {
          refreshCart();
        }

        console.log("dog id=", dog.id, "amount=", dog.amount);
      }
      return dog;
    }
    ))
};
  const remFromCart = (id) => {
    setDogs(dogs.map((dog) => {
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
      return dog;
    }));

  };

  const refreshCart = () => {
    const newDogs = dogs.filter((dog) => dog.amount > 0);
    setCartDogs(newDogs);
  };

  const updateCart = (dog) => {
    setCartDogs([...cartDogs, dog]);
  };

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <Dogs
              dogs={dogs.slice(currentPage * dogsPerPage - dogsPerPage, currentPage * dogsPerPage)}
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
  )
}

export default Home