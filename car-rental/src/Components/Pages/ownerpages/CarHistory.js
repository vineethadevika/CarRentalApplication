import React,{useState} from 'react';
import Home from '../Home';
const CarHistory = () => {

  const bookings = [    { id: 1, carMake: 'Toyota', carModel: 'Corolla', startDate: '2022-05-01', endDate: '2022-05-05', totalPrice: 120 },    { id: 2, carMake: 'Honda', carModel: 'Accord', startDate: '2022-06-01', endDate: '2022-06-10', totalPrice: 350 },    { id: 3, carMake: 'Nissan', carModel: 'Altima', startDate: '2022-07-01', endDate: '2022-07-15', totalPrice: 600 },  ];
  const handleLogout = () => {
    window.location.href = "/";
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginBottom:'60px' }}>
     <h3 style={{ textAlign: 'center', marginBottom: '10px', color: 'darkblue', backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', cursor: 'pointer'}}>Booking History</h3>
      <table style={{ borderCollapse: 'collapse', width: '80%', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: 'lightgreen', color: 'darkblue' }}>
            <th style={{ border: '1px solid black', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Car Make</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Car Model</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Start Date</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>End Date</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} style={{ backgroundColor: 'yellow', color: 'darkblue' }}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{booking.id}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{booking.carMake}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{booking.carModel}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{booking.startDate}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{booking.endDate}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{`$${booking.totalPrice}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button style={{ backgroundColor: 'darkblue', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', border: 'none', cursor: 'pointer' }} onClick={handleLogout}>Return to Home</button>
     
    </div>
  );
};

export default CarHistory;
