import React from 'react'
import Indicadores from './components/Indicadores';
import Metricas from './components/Metricas';
import TopBar from './components/topbar/Topbar';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {

    return (

      <Router>
        <TopBar />
        <Routes >
          <Route path="/indicadores" element={<Indicadores/>}/>
          <Route path="/metricas" element={<Metricas/>}/>
        </Routes >
    </Router>
  );
}

export default App;
