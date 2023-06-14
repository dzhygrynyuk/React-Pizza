import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" element={
            <Home />
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