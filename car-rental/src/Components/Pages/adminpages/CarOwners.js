import React from 'react';

const ownerData = [
  { ownername: 'Vineetha', password: 'password123' },
  { ownername: 'Devi', password: 'password456' },
  { ownername: 'Bhargavi', password: 'password789' },
  { ownername: 'Jyothi', password: 'passwordabc' },
];

const CarOWners = () => {
  return (
    <div>
      <style>{`
        .owners-table {
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
          background-color: orange;
        }
        tr:nth-child(odd) {
          background-color: yellow;
        }

        tr:hover {
          background-color: #ddd;
        }
      `}</style>
      <div className="owners-table">
        <table>
          <thead>
            <tr>
              <th>Owner Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {ownerData.map((owner, index) => (
              <tr key={index}>
                <td>{owner.ownername}</td>
                <td>{owner.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarOWners;
