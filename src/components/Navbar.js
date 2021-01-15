import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    console.log('logout');
    dispatch(logout());
  };

  return (
    <nav className="p-6 bg-white flex justify-between">
      <ul className="flex items-center">
        <li>
          <Link to="/" className="p-3">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="p-3">
            Dashboard
          </Link>
        </li>
      </ul>

      {userInfo ? (
        <ul className="flex items-center">
          <li>
            <Link to="/" className="p-3">
              Username
            </Link>
          </li>
          <li>
            <Link to="/" className="p-3" onClick={logoutHandler}>
              Log out
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center">
          <li>
            <Link to="/login" className="p-3">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="p-3">
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
