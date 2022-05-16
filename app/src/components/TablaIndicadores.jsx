import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


export default function  TablaIndicadores() {
  const [indicadores, setIndicadores] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/indicadores');
      setIndicadores(res.data);
    };
    fetchPosts();
  }, );
  

  return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Tipo de indicador</th>
        <th>Eje</th>
        <th>Responsable</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      {indicadores.map((indicador) => (
          <tr key={indicador.id}>
            <td>{indicador.id}</td>
            <td>{indicador.nombre}</td>
            <td>{indicador.TipoIndicador}</td>
            <td>{indicador.eje}</td>
            <td>{indicador.Responsable}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button" onClick={() => 
                axios.delete(`http://localhost:4000/deleteindicadores/${indicador.id}`,
                window.location.reload(true))
                }>Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )}