import React from 'react';

const Product = ({ car }) => {
  return (
    <div>
      <h2>{car.brand} {car.model}</h2>
      <img src={car.image} alt={car.model} />
      <p>Price: ${car.price}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
      {/* Add other details you want to display */}
    </div>
  );
};

export default Product;
