import React from 'react';

const CarHistory = () => {
  const carHistory = [
    {
      id: 1,
      carName: '2019 Honda Civic',
      owner: 'John Smith',
      rentalPeriod: 'June 2020 - August 2020',
      rentalCost: '$1,500',
    },
    {
      id: 2,
      carName: '2020 Toyota Corolla',
      owner: 'Jane Doe',
      rentalPeriod: 'August 2020 - October 2020',
      rentalCost: '$1,600',
    },
    {
      id: 3,
      carName: '2018 Nissan Altima',
      owner: 'Bob Johnson',
      rentalPeriod: 'October 2020 - December 2020',
      rentalCost: '$1,400',
    },
    {
      id: 4,
      carName: '2017 Ford Mustang',
      owner: 'Sarah Lee',
      rentalPeriod: 'December 2020 - February 2021',
      rentalCost: '$2,000',
    },
  ];

  return (
    <div>
      <style>
        {`
          .car-history {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
          }

          .car-history-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          .car-history-table th,
          .car-history-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .car-history-table th {
            background-color:orange;
            color: #fff;
            text-transform: uppercase;
          }

          .car-history-table td:nth-child(2) {
            font-weight: bold;
          }

          .car-history-table td:last-child {
            text-align: right;
          }

          .car-history-table tr:hover {
            background-color: yellow;
          }
        `}
      </style>
      <div className="car-history">
        <h2>Car Rental History</h2>
        <table className="car-history-table">
          <thead>
            <tr>
              <th>Car Name</th>
              <th>Owner</th>
              <th>Rental Period</th>
              <th>Rental Cost</th>
            </tr>
          </thead>
          <tbody>
            {carHistory.map((historyItem) => (
              <tr key={historyItem.id}>
                <td>{historyItem.carName}</td>
                <td>{historyItem.owner}</td>
                <td>{historyItem.rentalPeriod}</td>
                <td>{historyItem.rentalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarHistory;
