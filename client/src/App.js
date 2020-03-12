import React from 'react';
import Routes from './route';
import { BrowserRouter } from 'react-router-dom';

// Components Import
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
