import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expeance from './Expeance';
import Home from './Home';
import Income from './Income';
import Nav from './Nav';
import { DataProvider } from './DataContext';

const App = () => {
  return (
    <DataProvider> 
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<Expeance />} />
            <Route path="/income" element={<Income />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
};

export default App;
