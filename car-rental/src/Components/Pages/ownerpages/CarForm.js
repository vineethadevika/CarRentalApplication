import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar({ make, model, year, price });
    setMake('');
    setModel('');
    setYear('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'lightgreen', padding: '30px', borderRadius: '5px', marginLeft:'200px',marginTop:'30px',marginRight:'200px',marginBottom:'40px'}}>
            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: 'darkblue' }}>Add a New Car</h3>
      <div className="form-group">
        
        <input
          type="text"
          id="model"
          placeholder="Enter model"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
          required
        />
      </div>
      <div className="form-group">
       
        <input
          type="text"
          id="year"
          placeholder="Enter year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
          required
        />
      </div>
      <div className="form-group">
       
        <input
          type="text"
          id="price"
          placeholder="Enter price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: 'darkblue', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize:
'16px', border: 'none', cursor: 'pointer' }}>Add Car</button>
    </form>
  );
};

export default CarForm;
