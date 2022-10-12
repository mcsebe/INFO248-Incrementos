import React from 'react'
import HistorialIndicadores from './historial peticiones/HistorialIndicadores';
import { useEffect, useState } from "react";
import axios from "axios";
import HistorialMetas from './historial peticiones/HistorialMetas';

export default function HistorialPeticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metas, setMetas] = useState([]);
    const [historial, setHistorial] = useState([]);
    const [ejes, setEjes] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/indicadores/lista');
        setIndicadores(res.data);
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

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('http://localhost:4000/ejes/lista');
          setEjes(res.data);
        };
        fetchPosts();
      }, );

  return (
    <div className="container">
      <h1>Historial de solicitudes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <HistorialIndicadores indicadores={indicadores} historial={historial} ejes={ejes}/>

          <h2>Metas</h2>
          <HistorialMetas metas={metas} indicadores={indicadores} historial={historial}/>

        </div>

      </div>
    </div>
  );
}