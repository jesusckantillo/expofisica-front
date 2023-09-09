import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout';

import HomePage from "./pages/HomePage";
import Mechanical1 from './pages/mechanicalPhysics/Mechanical1';
import Mechanical2 from "./pages/mechanicalPhysics/Mechanical2";
import Electricity1 from "./pages/electricityPhysics/Electricity1";
import Electricity2 from "./pages/electricityPhysics/Electricity2";
import HeatWave1 from "./pages/heatWavePhysics/HeatWave1";
import HeatWave2 from "./pages/heatWavePhysics/HeatWave2";

const Paths = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/mecanica1' element={<Mechanical1/>}/>
              <Route path='/mecanica2' element={<Mechanical2/>}/>
              <Route path='/calorOnda1' element={<HeatWave1/>}/>
              <Route path='/calorOnda2' element={<HeatWave2/>}/>
              <Route path='/electricidad1' element={<Electricity1/>}/>
              <Route path='/electricidad2' element={<Electricity2/>}/>
              <Route path="*" element={<HomePage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      )
}

export default Paths;