import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from 'react-router-dom';


export default function  TablaMetrica(props) {

  const [metricas, setMetricas] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/metricas/lista');
      setMetricas(res.data);
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
      {metricas.map((metrica) => (
          <tr key={metrica.id}>
            <td>{metrica.id}</td>
            <td>{metrica.nombre}</td>
            <td>
              <Link to={`./ver/${metrica.id}`}>
                <button className="button muted-button">Edit</button> 
              </Link>
              {/* <button className="button muted-button">Edit</button> */}
              <button className="button muted-button delete" onClick={() => 
                axios.delete(`http://localhost:4000/metricas/deletemetricas/${metrica.id}`,
                window.location.reload(true))
                }>Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )}