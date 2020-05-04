import React from 'react';
import { Link } from 'gatsby';
import { logout, login, isAuthenticated } from '../utils/auth';

const ListLink = (props) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout = ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: 800 }}>
    <ul style={{ listStyle: 'none', float: 'right' }}>
      <ListLink to="/home">Home </ListLink>
      <ListLink to="/resources">Resources </ListLink>
      { isAuthenticated() ? (
        <>
          <ListLink to="/profile">Profile </ListLink>
          <a
            href="#logout"
            onClick={(e) => {
              logout();
              e.preventDefault();
            }}
          >
            {' '}
            Log Out
            {' '}
          </a>
        </>
      ) : (
        <a
          href="#login"
          onClick={(e) => {
            login();
            e.preventDefault();
          }}
        >
          {' '}
          Login
          {' '}
        </a>
      )}
    </ul>
    <main>{children}</main>
  </div>
);

export default Layout;
