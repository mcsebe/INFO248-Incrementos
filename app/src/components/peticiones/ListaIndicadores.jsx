import React from 'react'
import axios from 'axios'

class ListaIndicadores extends React.Component {    

  state = {
    idIndicadoresA: [],
    idIndicadoresD: []
  }

  onAprobarClick = () => {
    for(let i=0; i < this.state.idIndicadoresA.length ; i++){ 
        axios.put(`http://localhost:4000/indicadores/setaprobado/${this.state.idIndicadoresA[i]}`)
    }
    for(let i=0; i < this.state.idIndicadoresD.length ; i++){ 
        axios.delete(`http://localhost:4000/indicadores/deleteindicadores/${this.state.idIndicadoresD[i]}`)
    }
  }

  onRechazarClick = () => {
    for(let i=0; i < this.state.idIndicadoresA.length ; i++){ 
        axios.delete(`http://localhost:4000/indicadores/deleteindicadores/${this.state.idIndicadoresA[i]}`)
    }
    for(let i=0; i < this.state.idIndicadoresD.length ; i++){ 
        axios.put(`http://localhost:4000/indicadores/setaprobado/${this.state.idIndicadoresD[i]}`)
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
            <th>Petición</th>
        </tr>
        </thead>
        <tbody>
        {this.props.indicadores.map((indicador) => (
            indicador.Aprobado === 0 ?

            <tr key={indicador.id}>
                {indicador.Peticion === 'Añadir' ?
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={indicador.id}
                    onChange={e => this.state.idIndicadoresA.includes(e.target.value) ? this.state.idIndicadoresA = this.state.idIndicadoresA.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idIndicadoresA.push(e.target.value)
                    }/>
                </td>
                :
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={indicador.id}
                    onChange={e => this.state.idIndicadoresD.includes(e.target.value) ? this.state.idIndicadoresD = this.state.idIndicadoresD.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idIndicadoresD.push(e.target.value)
                    }/>
                </td>
                }
                <td>{indicador.id}</td>
                <th>{indicador.CalificacionCORFO}</th>
                <th>{indicador.NumeroIndicador}</th>
                <th>{indicador.MisionUniversitaria}</th>
                <td>{indicador.nombre}</td>
                <td>{indicador.TipoIndicador}</td>
                <td>{indicador.eje}</td>
                <th>{indicador.Unidad}</th>
                <th>{indicador.FuenteInformacion}</th>
                <td>{indicador.Responsable}</td>
                <th>{indicador.Frecuencia}</th>
                {indicador.Peticion === 'Añadir'?
                    <th style={AStyle}>{indicador.Peticion}</th>
                    :
                    <th style={DStyle}>{indicador.Peticion}</th>}
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

export default ListaIndicadores;