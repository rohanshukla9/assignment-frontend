import React, { useState, useEffect } from 'react';
import { Form, Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {
  createPost,
  authUserPosts,
  postAuthDelete,
} from '../actions/postActions';
import { POST_DELETE_RESET } from '../constants/postConstants';

const PostScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [body, setBody] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [message, setMessage] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postAuthUser = useSelector((state) => state.postAuthUser);
  const { loading: loadingList, error: errorList, posts } = postAuthUser;

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, success } = postCreate;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  useEffect(() => {
    if (userInfo) {
      dispatch(authUserPosts());
    } else {
      history.push('/login');
    }

    if (success || successDelete) {
      dispatch(authUserPosts());
      setBody('');
    }
  }, [dispatch, userInfo, history, success, successDelete]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(body, minutes));
  };

  const deleteHandler = (id) => {
    // e.preventDefault();
    dispatch(postAuthDelete(id));

    dispatch(authUserPosts());

    console.log(id);
  };

  return (
    <>
      {/* {error && (
          <Message message="red">You have errors in form please check</Message>
        )}

        {success && (
          <Message message="green">Successfully shared the status!</Message>
        )}
        {successDelete && (
          <Message message="red">Successfully deleted the status!</Message>
        )} */}

      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="body">
          <Form.Label>Simple app:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            cols={30}
            placeholder="Share your status!"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Expiration Time</Form.Label>
          <Form.Control
            as="select"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          >
            <option value={0}>No Time</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Post!
        </Button>
      </Form>
      <br />
      <Row>
        <Col md={8}>
          <h2>My Statuses</h2>
          {loadingList ? (
            <Loader />
          ) : errorList ? (
            <Message variant="danger">{errorList}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Body</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.body}</td>
                    <td>{post.created_at}</td>

                    <td>
                      <Button
                        className="btn-sm btn-danger"
                        variant="light"
                        onClick={() => deleteHandler(post.id)}
                      >
                        Delete
                      </Button>
                    </td>

                    {/* <td>
                <LinkContainer to={`/order/${order._id}`}>
                  <Button className='btn-sm' variant='light'>Details</Button>
                </LinkContainer>
              </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
};
export default PostScreen;
