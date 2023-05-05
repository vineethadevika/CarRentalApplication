import React, { useState } from 'react';

const ManageAdvertisements = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [newAdvertisement, setNewAdvertisement] = useState({ title: '', description: '', price: '', location: '' });

  const handleTitleChange = (event) => {
    setNewAdvertisement({ ...newAdvertisement, title: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setNewAdvertisement({ ...newAdvertisement, description: event.target.value });
  };

  const handlePriceChange = (event) => {
    setNewAdvertisement({ ...newAdvertisement, price: event.target.value });
  };

  const handleLocationChange = (event) => {
    setNewAdvertisement({ ...newAdvertisement, location: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAdvertisements([...advertisements, newAdvertisement]);
    setNewAdvertisement({ title: '', description: '', price: '', location: '' });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#424242', textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Manage Advertisements</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>

          <input type="text" id="title" value={newAdvertisement.title} placeholder="Title" onChange={handleTitleChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>

          <textarea id="description" value={newAdvertisement.description} placeholder="Description" onChange={handleDescriptionChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none', minHeight: '20px' }}></textarea>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          
          <input type="text" id="price" value={newAdvertisement.price} placeholder="Price" onChange={handlePriceChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          
          <input type="text" id="location" placeholder="location" value={newAdvertisement.location} onChange={handleLocationChange} style={{ border:'1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
</div>
<button type="submit" style={{ backgroundColor: '#1976d2', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}>Create Ad</button>
</form>
<hr style={{ margin: '30px 0', border: 'none', borderBottom: '1px solid #bdbdbd' }} />
<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
{advertisements.length === 0 ? (
<p style={{ color: '#757575', fontSize: '16px', textAlign: 'center' }}>No advertisements to show.</p>
) : (
advertisements.map((advertisement, index) => (
<div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
{/* <h3 style={{ color: '#424242', fontSize: '24px', marginBottom: '10px' }}>{advertisement.title}</h3>
<p style={{ color: '#757575', fontSize: '16px', marginBottom: '10px' }}>{advertisement.description}</p> */}
<p style={{ color: '#757575', fontSize: '16px', marginBottom: '10px' }}>Price: {advertisement.price}</p>
{/* <p style={{ color: '#757575', fontSize: '16px', marginBottom: '10px' }}>Location: {advertisement.location}</p> */}
</div>
))
)}
</div>
</div>
);
};

export default ManageAdvertisements;
