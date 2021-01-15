import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
//import Loader from '../components/Loader';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Password do not match');
    } else {
      dispatch(register(name, email, password));
    }

    //dispatch register
  };

  return (
    <div className="w-4/12 bg-white p-6 rounded-lg">
      <form onSubmit={submitHandler}>
        {/* {message && <Message>{message}</Message>}
        {error && <Message>{error}</Message>} */}

        <div className="mb-4">
          <label for="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="bg-gray-100 border-2 w-full p-4 rounded-lg "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label for="email" className="sr-only">
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
          <label for="password" className="sr-only">
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
        <div className="mb-4">
          <label for="password_confirmation" className="sr-only">
            Password again
          </label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Password again"
            className="bg-gray-100 border-2 w-full p-4 rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
