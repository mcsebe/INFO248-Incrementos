import React from 'react'
import ListaIndicadores from './peticiones/ListaIndicadores';
import { useEffect, useState } from "react";
import axios from "axios";
import ListaMetas from './peticiones/ListaMetas';
import { Link } from "react-router-dom";

export default function Peticiones() {

    const [indicadores, setIndicadores] = useState([]);
    const [metas, setMetas] = useState([]);
    const [ejes, setEjes] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/indicadores/lista');
        setIndicadores(res.data);
      };
      fetchPosts();
    }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('http://localhost:4000/metas/lista');
          setMetas(res.data);
        };
        fetchPosts();
      }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('http://localhost:4000/ejes/lista');
          setEjes(res.data);
        };
        fetchPosts();
      }, []);

  return (
    <div className="container">
      <h1>Solicitudes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Indicadores</h2>
          <ListaIndicadores indicadores={indicadores} ejes={ejes}/>

          <h2>Metas</h2>
          <ListaMetas metas={metas} indicadores={indicadores}/>

          <Link to="/historial-peticiones" className="flex-row historial" style={{color: "green"}}>
            <button className="historial-button">
            Historial
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}