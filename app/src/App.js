import React from 'react'
import Indicadores from './components/Indicadores';
import Metas from './components/Metas';
import Peticiones from './components/Peticiones';
import Datos from './components/Datos';
import TopBar from './components/topbar/Topbar';
import HistorialPeticiones from './components/HistorialPeticiones'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {

    return (

      <Router>
        <TopBar />
        <Routes >
          <Route path="/indicadores" element={<Indicadores/>}/>
          <Route path="/metas" element={<Metas/>}/>
          <Route path="/peticiones" element={<Peticiones/>}/>
          <Route path="/datos" element={<Datos/>}/>
          <Route path="/historial-peticiones" element={<HistorialPeticiones/>}/>
        </Routes >
    </Router>
  );
}

export default App;
