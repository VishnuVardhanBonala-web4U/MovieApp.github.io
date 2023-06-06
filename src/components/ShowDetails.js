import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleBookTicket = () => {
    // Logic to handle booking ticket
    // You can open a form with movie details and use local/session storage to store user details
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container ">
      <h2 className='bg-primary text-center rounded w-100 '>Show Details</h2>
      <center><div className="card card-center"   style={{width:"25rem"}}>
        <img src={show.image?.medium} className="card-img-top" alt={show.name} />
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          <button className="btn btn-primary mx-3" onClick={handleBookTicket}>
            Book Ticket
          </button>
          <button className="btn btn-secondary ml-2" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      </center>
    </div>
  );
}

export default ShowDetails;