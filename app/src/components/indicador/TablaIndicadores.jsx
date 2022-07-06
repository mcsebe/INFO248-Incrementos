import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


export default function  TablaIndicadores() {
  const [indicadores, setIndicadores] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/indicadores/lista');
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
        <th>Opción</th>
      </tr>
    </thead>
    <tbody>
      {indicadores.map((indicador) => (
        indicador.Aprobado === 1 ?
          <tr key={indicador.id}>
            <td>{indicador.id}</td>
            <td>{indicador.nombre}</td>
            <td>{indicador.TipoIndicador}</td>
            <td>{indicador.eje}</td>
            <td>{indicador.Responsable}</td>
            <td>
              {/* <button className="button muted-button">Edit</button> */}
              <button className="button muted-button delete" onClick={() => 
                axios.put(`http://localhost:4000/indicadores/setpeticion/${indicador.id}`,
                window.location.reload(true))
                }>Eliminar</button>
            </td>
          </tr>
        :
        indicador.Peticion === 'Añadir'?
        <tr key={indicador.id} style={{backgroundColor: "#c6fbd8ad"}}>
          <td>{indicador.id}</td>
          <td>{indicador.nombre}</td>
          <td>{indicador.TipoIndicador}</td>
          <td>{indicador.eje}</td>
          <td>{indicador.Responsable}</td>
          <td style={{color: "green"}}>Peticion Añadir</td>
        </tr>
        :
        <tr key={indicador.id} style={{backgroundColor: "#feb6b8a8"}}> 
          <td>{indicador.id}</td>
          <td>{indicador.nombre}</td>
          <td>{indicador.TipoIndicador}</td>
          <td>{indicador.eje}</td>
          <td>{indicador.Responsable}</td>
          <td style={{color: "red"}}>Peticion Eliminar</td>
        </tr>
        ))
      }
    </tbody>
  </table>
  )}