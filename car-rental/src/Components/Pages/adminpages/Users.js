import React from 'react';

const userData = [
  { username: 'alice', password: 'password123' },
  { username: 'bob', password: 'password456' },
  { username: 'charlie', password: 'password789' },
  { username: 'dave', password: 'passwordabc' },
];

const Users = () => {
  return (
    <div>
      <style>{`
        .users-table {
          margin: 0 auto;
          max-width: 600px;
        }

        table {
          border-collapse: collapse;
          width: 100%;
        }

        th,
        td {
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: blue;
          font-weight: bold;
          color:white;
        }

        tr:nth-child(even) {
          background-color: pink;
        }
        tr:nth-child(odd) {
          background-color: yellow;
        }

        tr:hover {
          background-color: #ddd;
        }
      `}</style>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
