import React, { useState } from 'react';

const Payment = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="payment-form" style={{ backgroundColor: 'lightgreen', padding: '33px', borderRadius: '5px' ,width:"50%",marginLeft:'220px'}}>
      <h3 style={{ color: 'blue', marginBottom: '20px' }}>Payment Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <input
            type="text"
            id="name"
            placeholder="Cardholder Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="cardNumber"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'darkblue', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize:
'16px', border: 'none', cursor: 'pointer' }}>Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
