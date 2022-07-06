import React from 'react'
import axios from 'axios'

class ListaMetricas extends React.Component {    

  state = {
    idMetricasA: [],
    idMetricasD: []
  }

  onAprobarClick = () => {
    for(let i=0; i < this.state.idMetricasA.length ; i++){ 
        axios.put(`http://localhost:4000/metricas/setaprobado/${this.state.idMetricasA[i]}`)
    }
    for(let i=0; i < this.state.idMetricasD.length ; i++){ 
        axios.delete(`http://localhost:4000/metricas/deletemetricas/${this.state.idMetricasD[i]}`)
    }
  }

  onRechazarClick = () => {
    for(let i=0; i < this.state.idMetricasA.length ; i++){ 
        axios.delete(`http://localhost:4000/metricas/deletemetricas/${this.state.idMetricasA[i]}`)
    }
    for(let i=0; i < this.state.idMetricasD.length ; i++){ 
        axios.put(`http://localhost:4000/metricas/setaprobado/${this.state.idMetricasD[i]}`)
    }
  }

  render(){
    const AStyle = {
        color: 'green'
    };

    const DStyle = {
        color: 'red'
    };

    return(
    <div>

    <table>
        <thead>
        <tr>
            <th></th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Indicadores</th>
            <th>Petición</th>
        </tr>
        </thead>
        <tbody>
        {this.props.metricas.map((metrica) => (
            metrica.Aprobado === 0 ?

            <tr key={metrica.id}>
                {metrica.Peticion === 'Añadir' ?
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={metrica.id}
                    onChange={e => this.state.idMetricasA.includes(e.target.value) ? this.state.idMetricasA = this.state.idMetricasA.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idMetricasA.push(e.target.value)
                    }/>
                </td>
                :
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={metrica.id}
                    onChange={e => this.state.idMetricasD.includes(e.target.value) ? this.state.idMetricasD = this.state.idMetricasD.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idMetricasD.push(e.target.value)
                    }/>
                </td>
                }
                <td>{metrica.id}</td>
                <td>{metrica.nombre}</td>


                        <td>
                            {this.props.indicadores.map((indicador) => (
                                indicador.idMetrica === metrica.id ?
                                    <div>
                                    {indicador.id} ㅤㅤㅤㅤ  {indicador.nombre}
                                    <br/>
                                    </div>
                                    :
                                    <div/>
                            ))}
                        </td>


                {metrica.Peticion === 'Añadir'?
                    <td style={AStyle}>{metrica.Peticion}</td>
                    :
                    <td style={DStyle}>{metrica.Peticion}</td>}
            </tr>
            :
            <div/>
            ))
        }
        </tbody>
    </table>
    
    <div className="flex-row" style={{paddingTop : '25px'}}>
        <div>
            <button onClick={
            () => this.onAprobarClick()
            }>Aprobar solicitudes</button>
        </div>
        <div style={{paddingLeft : '50px'}}>
            <button style={{background: 'red',  borderColor: 'red'}}
            onClick={
            () => this.onRechazarClick()
            }>Rechazar solicitudes</button>
        </div>

    </div>

    </div>
        );
  }
}

export default ListaMetricas;