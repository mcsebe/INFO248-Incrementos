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
        <th>Calificación CORFO</th>
        <th>Misión Universitaria</th>
        <th>Nombre</th>
        <th>Eje</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      {indicadores.map((indicador) => (
          <tr key={indicador.id}>
            <td>{indicador.CalificacionCORFO}</td>
            <td>{indicador.MisionUniversitaria}</td>
            <td>{indicador.nombre}</td>
            <td>{indicador.eje}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )}