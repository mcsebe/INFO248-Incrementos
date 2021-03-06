import React from 'react'
import axios from 'axios'

class ListaIndicadores extends React.Component {    

  state = {
    idIndicadoresA: [],
    idIndicadoresD: []
  }

  onAprobarClick = () => {
    for(let i=0; i < this.state.idIndicadoresA.length ; i++){ 
        axios.put(`http://opentera.inf.uach.cl:82/indicadores/setaprobado/${this.state.idIndicadoresA[i]}`)
    }
    for(let i=0; i < this.state.idIndicadoresD.length ; i++){ 
        axios.delete(`http://opentera.inf.uach.cl:82/indicadores/deleteindicadores/${this.state.idIndicadoresD[i]}`)
    }
  }

  onRechazarClick = () => {
    for(let i=0; i < this.state.idIndicadoresA.length ; i++){ 
        axios.delete(`http://opentera.inf.uach.cl:82/indicadores/deleteindicadores/${this.state.idIndicadoresA[i]}`)
    }
    for(let i=0; i < this.state.idIndicadoresD.length ; i++){ 
        axios.put(`http://opentera.inf.uach.cl:82/indicadores/setaprobado/${this.state.idIndicadoresD[i]}`)
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
                {indicador.Peticion === 'Añadir'?
                    <td style={AStyle}>{indicador.Peticion}</td>
                    :
                    <td style={DStyle}>{indicador.Peticion}</td>}
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