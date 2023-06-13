import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector( ({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    };
  });

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" element={
            <Home items={items} />
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