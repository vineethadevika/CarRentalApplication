import React, { useState } from 'react';

const ManageCarOwners = () => {
  const [owners, setOwners] = useState([]);
  const [newOwner, setNewOwner] = useState({ name: '', password: '' });

  const handleNameChange = (event) => {
    setNewOwner({ ...newOwner, name: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setNewOwner({ ...newOwner, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOwners([...owners, newOwner]);
    setNewOwner({ name: '', password: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#424242', textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Manage Car Owners</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="name" style={{ color: '#757575', fontSize: '16px' }}>Name:</label>
          <input type="text" id="name" value={newOwner.name} onChange={handleNameChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="password" style={{ color: '#757575', fontSize: '16px' }}>Password:</label>
          <input type="password" id="password" value={newOwner.password} onChange={handlePasswordChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', alignSelf: 'flex-start', width: '120px' }}>Add Owner</button>
      </form>
      <div style={{ marginTop: '30px' }}>
        {owners.length === 0 ? (
          <p style={{ color: '#757575', textAlign: 'center' }}>No owners added yet.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5', color: '#757575', fontSize: '16px' }}>
                <th style={{ border: '1px solid #bdbdbd', padding: '10px' }}>Name</th>
                <th style={{ border: '1px solid #bdbdbd', padding: '10px' }}>Password</th>
              </tr>
            </thead>
            <tbody>
              {owners.map((owner, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid  #bdbdbd', padding: '10px' }}>{owner.name}</td>
              <td style={{ border: '1px solid #bdbdbd', padding: '10px' }}>{owner.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>
);
};

export default ManageCarOwners;
