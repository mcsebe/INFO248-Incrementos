import React from 'react'
import ListaIndicadores from './peticiones/ListaIndicadores';
import ListaMetricas from './peticiones/ListaMetricas';
import { useEffect, useState } from "react";
import axios from "axios";
import ListaMetas from './peticiones/ListaMetas';

export default function Peticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metricas, setMetricas] = useState([]);
    const [metas, setMetas] = useState([]);


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

  return (
    <div className="container">
      <h1>Peticiones</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <ListaIndicadores indicadores={indicadores}/>
        
          <h2>Métricas</h2>
          <ListaMetricas metricas={metricas} indicadores={indicadores}/>

          <h2>Metas</h2>
          <ListaMetas metas={metas} indicadores={indicadores}/>
        </div>

      </div>
    </div>
  );
}