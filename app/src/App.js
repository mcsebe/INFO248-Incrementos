import React from 'react'
import TablaIndicadores from "./components/TablaIndicadores";
import AddIndicador from './components/AddIndicador';

function App() {
    return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Indicador</h2>
          <AddIndicador/>
        </div>
        <div className="flex-large">
          <h2>Ver Indicadores</h2>

          <TablaIndicadores />
        </div>
      </div>
    </div>
  );
}

export default App;
