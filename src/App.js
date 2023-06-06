// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ShowList from './components/ShowList';
// import ShowDetails from './components/ShowDetails';

// import "./App.css"

// function App() {
//   const [selectedShow, setSelectedShow] = useState(null);

//   const handleSelectShow = (show) => {
//     setSelectedShow(show);
//   };

//   const handleBookTicket = (show) => {
//     // Handle booking ticket logic, e.g., open a form with show details
//   };

//   return (
//     <Router>
//       <div>
//         <nav className='navbar navbar-expand-md my-2 fixed rounded  navbar-primary bg-secondary  '>
//           <ul  className='navbar-nav'>
//             <li className='nav-item'>
//               <Link to="/" className='nav-link text-dark m-2 ' ><h2>HOME</h2></Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<ShowList onSelectShow={handleSelectShow} />} />
//           <Route
//             path="/details/:id"
//             element={
//               selectedShow ? (
//                 <ShowDetails show={selectedShow} onBookTicket={handleBookTicket} />
//               ) : (
//                 <ShowList onSelectShow={handleSelectShow} />
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

import "./App.css"
import PageNotFound from './PageNotFound';

function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (show) => {
    // Handle booking ticket logic, e.g., open a form with show details
  };
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-md my-2 fixed rounded  navbar-primary bg-secondary  '>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-dark m-2'><h2 className='text-light'>HOME</h2></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShowList onSelectShow={handleSelectShow} />} />
          <Route path="/details/:id" element={<ShowDetails />} />

          <Route
            path="/details/:id"
            element={
              selectedShow ? (
                <ShowDetails show={selectedShow} onBookTicket={handleBookTicket} />
              ) : (
                <ShowList onSelectShow={handleSelectShow} />
              )
            }

          />
          <Route path="*" element={<PageNotFound/>} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;