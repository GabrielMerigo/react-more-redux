import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import Header from './components/Header/Header';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
