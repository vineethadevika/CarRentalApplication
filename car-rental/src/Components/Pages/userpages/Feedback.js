import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="feedback-form" style={{ backgroundColor: 'lightgreen', padding: '20px', borderRadius: '5px' ,width:"50%",marginLeft:'220px'}}>
      <h3 style={{ color: 'blue', marginBottom: '20px' }}>Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          />
        </div>
        <div className="form-group">
         
          <select
            id="rating"
            value={rating} 
            onChange={(event) => setRating(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          >
            <option value="">Select a rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
        </div>
        <div className="form-group">
          
          <textarea
            id="comment"
            placeholder="Write Your Comments Here"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', marginBottom: '10px' }}
            required
          ></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: 'darkblue', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize:
'16px', border: 'none', cursor: 'pointer' }}>Submit</button>
</form>
</div>
);
};

export default Feedback;