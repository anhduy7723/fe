import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SignCar from './SignCar';
import CarCarousel from './CarCarousel';
import ContentSlider from './ContentSlider';
function CarCard({ car, onClose }) {
  return (
    <div className="car-card">
      <div className="car-card-content">
        <span className="car-card-close" onClick={onClose}>&times;</span>
        <h2>{car.brand} {car.model}</h2>
        <img src={car.image} alt={car.model} />
        <p>Price: ${car.price}</p>
        <p>Year: {car.year}</p>
        <p>Color: {car.color}</p>
      </div>
    </div>
  );
}

function Home() {
  const [cars, setCars] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    customerName: '',
    email: '',
    appointmentDate: '',
    storeLocation: '',
  });
  const [selectedCar, setSelectedCar] = useState(null);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [allBrands, setAllBrands] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsResponse = await axios.get(`/api/cars${filterBrand ? `?brand=${filterBrand}` : ''}${filterColor ? `&color=${filterColor}` : ''}`);
        setCars(carsResponse.data);

        const brandsResponse = await axios.get('/api/cars/brands');
        setAllBrands(brandsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filterBrand, filterColor]);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/appointments/book', appointmentData)
      .then(response => {
        console.log('Appointment booked successfully:', response.data);
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
      });
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setIsCardOpen(true);
  };

  const handleFilterChange = (brand) => {
    setFilterBrand(brand);
  };

  const handleColorFilterChange = (color) => {
    setFilterColor(color);
  };

  const closeCard = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <CarCarousel />
      <ContentSlider/>
      <div className="content-container">
        <div className="container">
          <div className="sidebar-container">
            <h2>Filter by Brand:</h2>
            <div className="brand-buttons">
              <button onClick={() => handleFilterChange('')}>All Brands</button>
              <button onClick={() => handleFilterChange('Toyota')}>Toyota</button>
              <button onClick={() => handleFilterChange('Honda')}>Honda</button>
            </div>

            <h2>Filter by Color:</h2>
            <div className="color-buttons">
              <button onClick={() => handleColorFilterChange('')}>All Colors</button>
              <button onClick={() => handleColorFilterChange('Red')}>Red</button>
              <button onClick={() => handleColorFilterChange('Blue')}>Blue</button>
            </div>
          </div>

          <div className="car-list-container">
            <ul className="car-list">
              {cars.map(car => (
                <li key={car._id} onClick={() => handleCarClick(car)}>
                  <img src={car.image} alt={car.model} />
                  <p>{car.brand} {car.model}</p>
                  <p>Price: ${car.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isCardOpen && selectedCar && (
          <CarCard car={selectedCar} onClose={closeCard} />
        )}

      </div>

      <SignCar />
      <Footer/>
    </div>
  );
}

export default Home;
