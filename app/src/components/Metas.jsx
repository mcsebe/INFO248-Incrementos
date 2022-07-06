import React from 'react'
import TablaMeta from './metas/TablaMeta';
import AddMeta from './metas/AddMeta';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Metas() {

    const [indicadores, setIndicadores] = useState([]);


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/indicadores/lista');
        setIndicadores(res.data);
      };
      fetchPosts();
    }, );

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir Meta</h2>
          <AddMeta indicadores={indicadores}/>
        </div>
        <div className="flex-large">
          <h2>Ver Meta</h2>

          <TablaMeta indicadores={indicadores}/>
        </div>
      </div>
    </div>
  );
}