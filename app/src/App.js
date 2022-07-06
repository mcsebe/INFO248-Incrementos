import React from 'react'
import Indicadores from './components/Indicadores';
import Metricas from './components/Metricas';
import Metas from './components/Metas';
import Peticiones from './components/Peticiones';
import TopBar from './components/topbar/Topbar';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {

    return (

      <Router>
        <TopBar />
        <Routes >
          <Route path="/indicadores" element={<Indicadores/>}/>
          <Route path="/metricas" element={<Metricas/>}/>
          <Route path="/metas" element={<Metas/>}/>
          <Route path="/peticiones" element={<Peticiones/>}/>
        </Routes >
    </Router>
  );
}

export default App;
