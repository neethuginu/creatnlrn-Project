import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Createproduct from './components/Createproduct';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Wishlist from './components/Wishlist';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/createproduct" component={Createproduct} />
        <Route path="/login" component={Login} />
        <Route path="/wishlist" component={Wishlist} />
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
