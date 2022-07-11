import React from 'react'
import TablaMetrica from './metricas/TablaMetrica';
import AddMetrica from './metricas/AddMetrica';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Metricas() {

    const [indicadores, setIndicadores] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://146.83.216.224:8000/indicadores/lista');
        setIndicadores(res.data);
      };
      fetchPosts();
    }, );

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Metrica</h2>
          <AddMetrica indicadores={indicadores}/>
        </div>
        <div className="flex-large">
          <h2>Ver Metrica</h2>

          <TablaMetrica indicadores={indicadores}/>
        </div>
      </div>
    </div>
  );
}