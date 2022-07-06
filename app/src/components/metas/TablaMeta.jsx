import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";


export default function  TablaMeta(props) {

  const [metas, setMetas] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/metas/lista');
      setMetas(res.data);
    };
    fetchPosts();
  }, );
  
  return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
      </tr>
    </thead>
    <tbody>
      {metas.map((meta) => (
        meta.Aprobado === 1 ?
        <tr key={meta.id}>
          <td>{meta.id}</td>
          <td>{meta.nombre}</td>
          <td>
            {/* <button className="button muted-button">Edit</button> */}
            <button className="button muted-button delete" onClick={() => 
              axios.put(`http://localhost:4000/metas/setpeticion/${meta.id}`,
              window.location.reload(true))
              }>Eliminar</button>
          </td>
        </tr>
      :
      meta.Peticion === 'Añadir'?
      <tr key={meta.id} style={{backgroundColor: "#a4fbc1"}}>
        <td>{meta.id}</td>
        <td>{meta.nombre}</td>
        <td>
          {/* <button className="button muted-button">Edit</button> */}
          <button className="button muted-button delete" onClick={() => 
            axios.put(`http://localhost:4000/metas/setpeticion/${meta.id}`,
            window.location.reload(true))
            }>Eliminar</button>
        </td>
      </tr>
      :
      <tr key={meta.id} style={{backgroundColor: "#fba4a7"}}>
        <td>{meta.id}</td>
        <td>{meta.nombre}</td>
        <td>
          {/* <button className="button muted-button">Edit</button> */}
          <button className="button muted-button delete" onClick={() => 
            axios.put(`http://localhost:4000/metas/setpeticion/${meta.id}`,
            window.location.reload(true))
            }>Eliminar</button>
        </td>
      </tr>
      ))
        
      }
    </tbody>
  </table>
  )}