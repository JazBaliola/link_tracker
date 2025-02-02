import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
