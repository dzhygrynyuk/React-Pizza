import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

import { connect } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

/*
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
} */

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
      this.props.setPizzas(data);
    });
  }

  render() {
    console.log(this.props);
    return(
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route exact path="/" element={ 
              <Home items={this.props.items}/> 
            } />
            <Route exact path="/cart" element={
              <Cart />
            } />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  };
}

// OR Short Dispatch Variant
// const mapDispatchToProps =  {
//   setPizzas
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);