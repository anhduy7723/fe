// AppointmentForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredCar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/appointments/book', formData);
      console.log('Appointment booked successfully:', response.data);

      // Show success notification
      toast.success('Appointment booked successfully', {
        position: toast.POSITION.TOP_CENTER,
      });

      // Add logic to handle successful appointment booking
    } catch (error) {
      console.error('Error booking appointment:', error);

      // Show error notification
      toast.error('Error booking appointment', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Đăng ký lái thử xe ô tô</h1>
        <label htmlFor="fullName">Họ và tên:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Số điện thoại:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="preferredCar">Xe ô tô muốn lái thử:</label>
        <input
          type="text"
          id="preferredCar"
          name="preferredCar"
          value={formData.preferredCar}
          onChange={handleChange}
          required
        />

        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
