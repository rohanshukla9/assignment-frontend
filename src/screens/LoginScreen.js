import React, { useState, useEffect } from 'react';
//{`banner ${active ? "active" : ""}`}
import { login } from '../actions/userActions';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <div className="w-4/12 bg-white p-6 rounded-lg">
      {error && <Message message="red">{error}</Message>}
      {loading && (
        <button type="button" className="bg-rose-600" disabled>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          Processing
        </button>
      )}
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email address"
            className="bg-gray-100 border-2 w-full p-4 rounded-lg "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="bg-gray-100 border-2 w-full p-4 rounded-lg "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
