import React from "react";
import { NavLink } from "react-router-dom";
// const Navigation = () => {
//   return (
//     <>
//         <div className="navbar_div d-flex justify-content-between">
//             <div className="logn">
//                 <h2 className="logoh">
//                 <NavLink to="/" className="logonav"><span>N</span><span>E</span><span>W</span><span>S</span></NavLink>

//                 </h2>
//             </div>

//             <div className="abfq d-flex justify-content-around  w-50">
//                 <div className="aboutn">
//                     <NavLink className="text-decoration-none text-white com" to='/about'>About</NavLink>
//                 </div>

//                 <div className="faqn">
//                     <NavLink className="text-decoration-none text-white com" to='/Faq'>FAQ's</NavLink>
//                 </div>

//                 <div className="faqn">
//                     <NavLink className="text-decoration-none text-white com" to='/login'>Login</NavLink>
//                 </div>

//                 <div className="faqn">
//                     <NavLink className="text-decoration-none text-white com" to='/register'>Sign Up</NavLink>
//                 </div>

//                 <div className="faqn">
//                     <NavLink className="text-decoration-none text-white com" to='/contact'>Contact Us</NavLink>
//                 </div>
//             </div>
//         </div>
//     </>

//   )
// }

// export default Navigation

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{"background-color":"#e3f2fd"}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand go" to="/">
            NEWS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navs">
              <li className="nav-item">
                <NavLink className="nav-link go" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link go" to="/Faq">
                  FAQ'S
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link go" to="/contact">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link go" to="/register">
                  SignUp
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link go" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
