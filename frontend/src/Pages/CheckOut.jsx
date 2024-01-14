import React, { useState } from 'react';
import './CSS/CheckOut.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      navigate('/Confirmation');
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <div className="checkout">
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
         
        </select>

        <button type="submit">Proceed to Confirmation</button>
      </form>
    </div>
  );
};

export default Checkout;
