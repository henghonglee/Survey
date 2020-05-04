import React from 'react';
import { Link } from 'gatsby';
import { logout, login, isAuthenticated } from '../../utils/auth';

const Layout = ({ children }) => (
  <>
    <h1>Resources</h1>
    <nav>
      <Link to="/home">Home </Link>
      <Link to="/resources">Resources </Link>
      {
          isAuthenticated()
            ? (
              <>
                <Link to="/profile">Profile </Link>
                <a href="#logout" onClick={(e) => { logout(); e.preventDefault(); }}> Log Out </a>
              </>
            )
            : <a href="#login" onClick={(e) => { login(); e.preventDefault(); }}> Login </a>
        }
    </nav>
    <main>
      {children}
    </main>
  </>
);

export default Layout;
