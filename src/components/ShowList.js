// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function ShowList() {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     fetch('https://api.tvmaze.com/search/shows?q=all')
//       .then((response) => response.json())
//       .then((data) => {
//         setShows(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <h2>Show List</h2>
//       <div className="row">
//  {shows.map((show) => (
//           <div className="col-md-4" key={show.show.id}>
//             <div className="card mb-4">
//               <img src={show.show.image?.medium} className="card-img-top" alt={show.show.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{show.show.name}</h5>
//                 <Link to={`/details/${show.show.id}`} className="btn btn-primary">
//                   View Summary
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ShowList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Show List</h2>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4" key={show.show.id}>
            <div className="card mb-4">
              <img src={show.show.image?.medium} className="card-img-top" alt={show.show.name} />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <Link to={`/details/${show.show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;