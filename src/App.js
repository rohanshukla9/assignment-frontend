import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostScreen from './screens/PostScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="py-3">
        <Container>
          <Route path="/dashboard" component={PostScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
