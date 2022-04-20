import React from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

class AddIndicador extends React.Component {
  state = {
    CalificacionCORFO : '',
    MisionUniversitaria : '',
    nombre : '',
    TipoIndicador: '',
    eje : '',
    Unidad : '',
    FuenteInformacion : ''
  }

  onAddClick = () => {
    axios.post('http://localhost:4000/addindicadores',{
      id: uuidv4(),
      CalificacionCORFO : this.state.CalificacionCORFO,
      MisionUniversitaria : this.state.MisionUniversitaria,
      nombre : this.state.nombre,
      TipoIndicador: this.state.TipoIndicador,
      eje : this.state.eje,
      Unidad : this.state.Unidad,
      FuenteInformacion : this.state.FuenteInformacion      
    })
  }

  render(){
    return(
      <form>
        <label>Calificación CORFO</label>
        <input type="text" value={this.state.CalificacionCORFO} onChange={e => this.setState({
          CalificacionCORFO: e.target.value
        })}/>
        <label>Misión Universitaria</label>
        <input type="text" value={this.state.MisionUniversitaria} onChange={e => this.setState({
          MisionUniversitaria: e.target.value
        })}/>
        <label>Nombre del indicador</label>
        <input type="text" value={this.state.nombre} onChange={e => this.setState({
          nombre: e.target.value
        })}/>
        <label>Tipo de Indicador</label>
        <input type="text" value={this.state.TipoIndicador} onChange={e => this.setState({
          TipoIndicador: e.target.value
        })}/>
        <label>Eje al que pertenece</label>
        <input type="text" value={this.state.eje} onChange={e => this.setState({
          eje: e.target.value
        })}/>
         <label>Unidad de medida</label>
        <input type="text" value={this.state.Unidad} onChange={e => this.setState({
          Unidad: e.target.value
        })}/>
        <label>Fuente de Informacion</label>
        <input type="text" value={this.state.FuenteInformacion} onChange={e => this.setState({
          FuenteInformacion: e.target.value
        })}/>
        <button onClick={
          () => this.onAddClick()
        }>Añadir</button>
      </form>
    );
  }
}

export default AddIndicador;