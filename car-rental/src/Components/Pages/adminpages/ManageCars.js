import React, { useState } from 'react';

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: '', model: '' });

  const handleMakeChange = (event) => {
    setNewCar({ ...newCar, make: event.target.value });
  };

  const handleModelChange = (event) => {
    setNewCar({ ...newCar, model: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCars([...cars, newCar]);
    setNewCar({ make: '', model: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#424242', textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Manage Cars</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="make" style={{ color: '#757575', fontSize: '16px' }}>Make:</label>
          <input type="text" id="make" value={newCar.make} onChange={handleMakeChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="model" style={{ color: '#757575', fontSize: '16px' }}>Model:</label>
          <input type="text" id="model" value={newCar.model} onChange={handleModelChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', alignSelf: 'flex-start', width: '120px' }}>Add Car</button>
      </form>
      <div style={{ marginTop: '30px' }}>
        {cars.length === 0 ? (
          <p style={{ color: '#757575', textAlign: 'center' }}>No cars added yet.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5', color: '#757575', fontSize: '16px' }}>
                <th style={{ border: '1px solid #bdbdbd', padding: '10px' }}>Make</th>
                <th style={{ border: '1px solid #bdbdbd', padding: '10px' }}>Model</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid  #bdbdbd', padding: '10px' }}>{car.make}</td>
<td style={{ border: '1px solid #bdbdbd', padding: '10px' }}>{car.model}</td>
</tr>
))}
</tbody>
</table>
)}
</div>
</div>
);
};

export default ManageCars;







