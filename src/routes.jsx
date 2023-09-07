import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout';

import HomePage from './pages/homePage';
import Mechanical1 from './pages/mechanicalPhysics/mechanical1';

const Paths = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/mecanica1' element={<Mechanical1/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      )
}

export default Paths;