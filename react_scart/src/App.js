import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Shop } from '../src/pages/shop';
import { Cart } from '../src/pages/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
           <Route path = "/" element={<Shop />} />
           <Route path = "/cart" element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
