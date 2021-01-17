import React from 'react';

import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div>
      <div className="mb-4">
        <div>
          <Link to="/" className="font-bold">
            {post.body}
          </Link>

          <span className="text-gray-600 text-small ml-20">
            {post.created_at}
          </span>

          <Link to="/" className="bg-red-500">
            Delete
          </Link>
        </div>

        <p className="mb-2"></p>
      </div>
    </div>
  );
};

export default Post;
