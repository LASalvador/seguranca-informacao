import React from 'react';
import Routes from './route';
import { BrowserRouter } from 'react-router-dom';

// Components Import
// import Header from './components/header';

function App() {
  // <Header />
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
