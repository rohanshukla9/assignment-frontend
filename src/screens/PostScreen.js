import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, authUserPosts } from '../actions/postActions';
import Message from '../components/Message';

const PostScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [body, setBody] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postAuthUser = useSelector((state) => state.postAuthUser);
  const {
    loading: loadingList,
    error: errorList,
    posts: allPosts,
  } = postAuthUser;

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, success, post } = postCreate;

  useEffect(() => {
    if (userInfo) {
      dispatch(authUserPosts());
    } else {
      history.push('/login');
    }
  }, [dispatch, userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(body));
    dispatch(authUserPosts());
  };

  return (
    <div className="w-6/12 bg-white p-6 rounded-lg">
      {error && <Message message="red">{error}</Message>}
      {success && (
        <Message message="green">Succesfully shared your status!</Message>
      )}
      <form className="mb-6" onSubmit={submitHandler}>
        <div className="mb-4">
          <label for="body" className="sr-only"></label>

          <textarea
            id="body"
            name="body"
            cols="30"
            rows="4"
            className="bg-gray-100 border-2 w-full p-4 rounded-lg"
            placeholder="Share your Status!"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-medium"
          >
            Post
          </button>
        </div>
      </form>

      <div>
        Your status!
        {allPosts.map((element) => (
          <div className="mb-4" key={element.id}>
            <div>
              <Link to="/" className="font-bold">
                {element.body}
              </Link>

              <span className="text-gray-600 text-small ml-20">
                {element.created_at}
              </span>
            </div>

            <p className="mb-2"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostScreen;
