import React from 'react';
import CarImage1 from '../../assets/all-images/cars-img/bmw-offer.png';
import CarImage2 from '../../assets/all-images/cars-img/mercedes-offer.png';
import CarImage3 from '../../assets/all-images/cars-img/nissan-offer.png';

const CarList = () => {
  const cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2018,
      price: 30,
      image: CarImage1,
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2019,
      price: 35,
      image: CarImage2,
    },
    {
      id: 3,
      make: 'Nissan',
      model: 'Altima',
      year: 2020,
      price: 40,
      image: CarImage3,
    },
  ];

  return (
    <>
<h3 style={{ textAlign: 'center', marginBottom: '10px', color: 'darkblue', backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Some Available Car Lists</h3>

    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {cars.map((car) => (
        <div key={car.id} style={{ backgroundColor: 'lightgray', borderRadius: '10px', width: '30%', marginBottom: '20px' }}>
          <img src={car.image} alt={car.make} style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          <div style={{ padding: '10px' }}>
            <h3>{`${car.make} ${car.model}`}</h3>
            <p>{`Year: ${car.year}`}</p>
            <p>{`Price: $${car.price} per day`}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CarList;
