import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostScreen from './screens/PostScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6 px-6">
        <div className="flex justify-center">
          <Route path="/dashboard" component={PostScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" component={HomeScreen} exact />
        </div>
      </div>
    </Router>
  );
};

export default App;
