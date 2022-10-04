import React from 'react'
import TablaMetrica from './metricas/TablaMetrica';
import AddMetrica from './metricas/AddMetrica';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Metricas() {

    const [indicadores, setIndicadores] = useState([]);
    const [metricas, setMetricas] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/indicadores/lista');
        setIndicadores(res.data);
      };
      fetchPosts();
    }, );

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/metricas/lista');
        setMetricas(res.data);
      };
      fetchPosts();
    }, );

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Metrica</h2>
          <AddMetrica indicadores={indicadores} metricas={metricas}/>
        </div>
        <div className="flex-large">
          <h2>Ver Metrica</h2>

          <TablaMetrica indicadores={indicadores}/>
        </div>
      </div>
    </div>
  );
}