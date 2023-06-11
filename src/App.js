import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
      setPizzas(data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" element={
            <Home pizzas={pizzas} />
          } />
          <Route exact path="/cart" element={
            <Cart />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;