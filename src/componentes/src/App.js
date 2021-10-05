import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  return <>
    <Nav/>
    <ItemListContainer/>
  </>;
}

export default App;
