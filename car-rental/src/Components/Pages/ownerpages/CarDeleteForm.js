import React, { useState } from 'react';

const CarDeleteForm = ({ deleteCar }) => {
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteCar(id);
    setId('');
  };

  return (
    <>
  <div style={{marginBottom:'125px'}}>
  <h3 style={{ textAlign: 'center', marginBottom: '10px', color: 'darkblue', backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', cursor: 'pointer',marginLeft:'200px',marginRight:'200px' }}>Delete Car</h3>
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'lightgreen', padding: '20px', borderRadius: '5px' ,marginTop:'25px',marginLeft:'200px',marginRight:'200px'}}>

      <div className="form-group">
        <label htmlFor="id" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>
          Enter car ID to delete:
        </label>
        <input
          type="text"
          id="id"
          placeholder="Enter car ID"
          value={id}
          onChange={(event) => setId(event.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: 'darkblue', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', border: 'none', cursor: 'pointer' }}>Delete Car</button>
    </form>
    </div>
    </>
  );
};

export default CarDeleteForm;
