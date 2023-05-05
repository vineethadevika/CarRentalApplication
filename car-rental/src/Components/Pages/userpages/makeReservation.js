import React, { useState } from 'react';

const Reservation = () => {
  const [car, setCar] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send reservation request to server
    console.log(`Reservation submitted: Car ${car}, Pickup ${pickupDate}, Return ${returnDate}`);
  };

  return (
    <div className="reservation-wrapper" style={{ backgroundColor: 'lightgreen', padding: '25px', borderRadius: '5px', width: '50%', marginLeft: '220px' }}>
      <div className="reservation-container">
        <h3 style={{ color: 'blue', marginBottom: '20px' }}>Make a Reservation</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="car" style={{ fontWeight: 'bold' }}>Select a car:</label>
            <select
              id="car"
              name="car"
              value={car}
              onChange={handleCarChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
              required
            >
              <option value="">Select a car</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="sports">Sports Car</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pickupDate" style={{ fontWeight: 'bold' }}>Pickup Date:</label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={pickupDate}
              onChange={handlePickupDateChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="returnDate" style={{ fontWeight: 'bold' }}>Return Date:</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={returnDate}
              onChange={handleReturnDateChange}
              style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
              required
            />
          </div>
          
          <button type="submit" style={{ backgroundColor: 'darkblue', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', border: 'none', cursor: 'pointer' }}>Submit Reservation</button>
          <br/>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
