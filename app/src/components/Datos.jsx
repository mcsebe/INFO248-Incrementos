import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Datos() {

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
        <h2>Indicadores</h2>
      <div className="flex-row">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Calificacion CORFO</th>
                <th>Número del indicador</th>
                <th>Misión Universitaria</th>
                <th>Nombre</th>
                <th>Tipo de indicador</th>
                <th>Eje</th>
                <th>Unidad de medida</th>
                <th>Fuente de información</th>
                <th>Responsable</th>
                <th>Frecuencia de medicion</th>
                <th>Métrica</th>
                <th>Meta</th>
            </tr>
            </thead>

            <tbody>
        {indicadores.map((indicador) => (
            indicador.Aprobado === 1 ?
            <tr key={indicador.id}>
                <td>{indicador.id}</td>
                <td>{indicador.CalificacionCORFO}</td>
                <td>{indicador.NumeroIndicador}</td>
                <td>{indicador.MisionUniversitaria}</td>
                <td>{indicador.nombre}</td>
                <td>{indicador.TipoIndicador}</td>
                <td>{indicador.eje}</td>
                <td>{indicador.Unidad}</td>
                <td>{indicador.FuenteInformacion}</td>
                <td>{indicador.Responsable}</td>
                <td>{indicador.Frecuencia}</td>
                <td>
                {metricas.map((metrica) => (
                    indicador.idMetrica === metrica.id && metrica.Aprobado === 1 ?
                    <div>{metrica.nombre}</div>
                    :
                    <div/>
                    ))
                }
                </td>

                <td>
                {metas.map((meta) => (
                    indicador.idMeta === meta.id && meta.Aprobado === 1 ?
                    <div>{meta.nombre}</div>
                    :
                    <div/>
                    ))
                }
                </td>

            </tr>
            :
            <div/>
            ))
        }
        </tbody>
        </table>
      </div>
    </div>
  );
}