import React from 'react';

const Message = ({ message, children }) => {
  let className = 'text-bold px-6 py-4 border-0 rounded relative mb-4 ';

  if (message === 'green') {
    className += 'bg-green-500';
  } else {
    className += 'bg-red-500';
  }
  return (
    <div className={className}>
      <span className="text-xl inline-block mr-5 align-middle">
        <i className="fas fa-bell" />
      </span>
      <span className="inline-block align-middle mr-8">
        <b className="capitalize">{children}</b>
      </span>
      <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
        <span>×</span>
      </button>
    </div>
  );
};

export default Message;
