import React from 'react'
import TablaIndicadores from "./indicador/TablaIndicadores";
import AddIndicador from './indicador/AddIndicador';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Indicadores() {

  const [metricas, setMetricas] = useState([]);
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/metricas/lista');
      setMetricas(res.data);
    };
    fetchPosts();
  }, );

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/metas/lista');
      setMetas(res.data);
    };
    fetchPosts();
  }, );

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Indicador</h2>
          <AddIndicador metricas={metricas} metas={metas}/>
        </div>
        <div className="flex-large">
          <h2>Ver Indicadores</h2>

          <TablaIndicadores/>
        </div>
      </div>
    </div>
  );
}