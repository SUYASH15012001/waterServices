import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import AddProduct from './components/addProduct'
import AddCategory from './components/addCategory'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={AddProduct}/>
          <Route exact path='/addP' component={AddCategory}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
