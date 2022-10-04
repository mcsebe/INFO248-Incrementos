import React from 'react'
import HistorialIndicadores from './historial peticiones/HistorialIndicadores';
import HistorialMetricas from './historial peticiones/HistorialMetricas';
import { useEffect, useState } from "react";
import axios from "axios";
import HistorialMetas from './historial peticiones/HistorialMetas';
import { Link } from "react-router-dom";

export default function HistorialPeticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metricas, setMetricas] = useState([]);
    const [metas, setMetas] = useState([]);
    const [historial, setHistorial] = useState([]);


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

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('http://localhost:4000/metas/lista');
          setMetas(res.data);
        };
        fetchPosts();
      }, );

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('http://localhost:4000/historial/lista');
          setHistorial(res.data);
        };
        fetchPosts();
      }, );

  return (
    <div className="container">
      <h1>Historial de solicitudes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <HistorialIndicadores indicadores={indicadores} historial={historial}/>
        
          <h2>Métricas</h2>
          <HistorialMetricas metricas={metricas} indicadores={indicadores} historial={historial}/>

          <h2>Metas</h2>
          <HistorialMetas metas={metas} indicadores={indicadores} historial={historial}/>

        </div>

      </div>
    </div>
  );
}