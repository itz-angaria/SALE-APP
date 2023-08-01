import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGIN_ERROR' });
    Swal.fire({
      icon: 'success',
      title: 'Log out Successfully',
    });
    navigate('/login');
  };

  // Check if the user is logged in by checking the token in local storage
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SALES APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* Conditionally render the tabs based on whether the user is logged in */}
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/addsale">
                      ADD SALES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/topsale">
                      TOP 5 SALES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/revenue">
                      TODAY'S TOTAL REVENUE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" onClick={() => logout()}>
                      LOGOUT
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link " href="/login">
                      LOGIN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/">
                      REGISTER
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
