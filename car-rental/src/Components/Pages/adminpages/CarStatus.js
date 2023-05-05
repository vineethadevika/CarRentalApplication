import React from 'react';

const ViewStatus = () => {
  const carsBooked = 15;
  const totalCars = 50;
  const totalOwners = 25;
  const totalUsers = 100;

  return (
    <div>
      <style>{`
        .status-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          color: #333;
        }

        .status-box {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease-in-out;
        }

        .status-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        .status-box-center {
          grid-column: 2 / 3;
        }

        .status-box-header {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 10px;
          text-transform: uppercase;
          color: #555;
        }

        .status-box-value {
          font-size: 36px;
          font-weight: bold;
          margin: 10px 0 0;
          color: #ff7f50;
        }
      `}</style>
      <div className="status-grid">
        <div className="status-box">
          <h2 className="status-box-header">Cars Booked</h2>
          <p className="status-box-value">{carsBooked}</p>
        </div>
        <div className="status-box status-box-center">
          <h2 className="status-box-header">Total Cars</h2>
          <p className="status-box-value">{totalCars}</p>
        </div>
        <div className="status-box">
          <h2 className="status-box-header">Total Owners</h2>
          <p className="status-box-value">{totalOwners}</p>
        </div>
        <div className="status-box">
          <h2 className="status-box-header">Total Users</h2>
          <p className="status-box-value">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewStatus;
