import Header from './components/Header';
import Home from './page/Home';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from './page/NotFound';
import Basket from './page/Basket';
import React from 'react';
function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/basket/" element={<Basket />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
