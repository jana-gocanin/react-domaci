import React from 'react'
import { ImPlus, ImMinus } from "react-icons/im";

const OneDog = ({dogName, dogDesc}) => {
    const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card" style={design}>
      <img className="card-img-top" src="https://picsum.photos/200" alt="Neka slika"/>
      <div className="card-body">
        <h3 className="card-title">{dogName}</h3>
        <p className="card-text">
          {dogDesc}   
        </p>
        <a className="btn"><ImPlus/></a>
        <a className="btn"><ImMinus/></a>
      </div>
    </div>
  );

  
}

export default OneDog