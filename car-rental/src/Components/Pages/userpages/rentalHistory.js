import React from 'react';

const RentalHistory = () => {
  // Simulated rental history data
  const rentalHistory = [
    {
      car: 'Sedan',
      pickupDate: '2022-02-01',
      returnDate: '2022-02-03',
      cost: 150
    },
    {
      car: 'SUV',
      pickupDate: '2022-03-05',
      returnDate: '2022-03-08',
      cost: 250
    },
    {
      car: 'Sports Car',
      pickupDate: '2022-04-12',
      returnDate: '2022-04-16',
      cost: 500
    }
  ];

  return (
    <div className="rental-history-container">
      <div className="rental-wrapper">
        <h3>Rental History</h3>
        <table>
          <thead>
            <tr>
              <th>Car</th>
              <th>Pickup Date</th>
              <th>Return Date</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {rentalHistory.map((rental, index) => (
              <tr key={index}>
                <td>{rental.car}</td>
                <td>{rental.pickupDate}</td>
                <td>{rental.returnDate}</td>
                <td>${rental.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .rental-history-container {
          margin: 47px 0;
          font-family: Arial, sans-serif;
        }

        .rental-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: lightgreen;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
          padding: 20px;
          border-radius: 5px;
        }

        h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        th,
        td {
          padding: 10px;
          text-align: center;
        }

        th {
          background-color: #0074d9;
          color: #fff;
          font-weight: bold;
        }

        tr:nth-child(even) {
          background-color: pink;
        }
        tr:nth-child(odd) {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
};

export default RentalHistory;
