import React, { useState } from 'react';

const ManageUsers = () => {
const [users, setUsers] = useState([]);
const [newUser, setNewUser] = useState({ name: '', password: '' });

const handleNameChange = (event) => {
setNewUser({ ...newUser, name: event.target.value });
};

const handlePasswordChange = (event) => {
setNewUser({ ...newUser, password: event.target.value });
};

const handleSubmit = (event) => {
event.preventDefault();
setUsers([...users, newUser]);
setNewUser({ name: '', password: '' });
};

return (
<div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
<h2 style={{ color: '#424242', textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Manage Users</h2>
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
<label htmlFor="name" style={{ color: '#757575', fontSize: '16px' }}>Name:</label>
<input type="text" id="name" value={newUser.name} onChange={handleNameChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
<label htmlFor="password" style={{ color: '#757575', fontSize: '16px' }}>Password:</label>
<input type="password" id="password" value={newUser.password} onChange={handlePasswordChange} style={{ border: '1px solid #bdbdbd', padding: '10px', borderRadius: '5px', outline: 'none' }} />
</div>
<button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', alignSelf: 'flex-start', width: '120px' }}>Add User</button>
</form>
<div style={{ marginTop: '30px' }}>
{users.length === 0 ? (
<p style={{ color: '#757575', textAlign: 'center' }}>No users added yet.</p>
) : (
<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<thead>
<tr style={{ backgroundColor: '#f5f5f5', color: '#757575', fontSize: '16px' }}>
<th style={{ border: '1px solid #bdbdbd', padding: '10px' }}>Name</th>
<th style={{ border: '1px solid #bdbdbd', padding: '10px' }}>Password</th>
</tr>
</thead>
<tbody>
{users.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid  #bdbdbd', padding: '10px' }}>{user.name}</td>
              <td style={{ border: '1px solid #bdbdbd', padding: '10px' }}>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>
);
};

export default ManageUsers;
