import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'


class AddIndicador extends React.Component {

  state = {
    CalificacionCORFO : 'Mínimo',
    NumeroIndicador: '',
    MisionUniversitaria : 'Primera',
    nombre : '',
    TipoIndicador: 'Entrada resultado',
    eje : 'Gobernanza y Sinergias',
    Unidad : '',
    FuenteInformacion : '',
    Responsable: '',
    Frecuencia: 'Diario',
    idMetrica: 0,

    usado: false,
    num: false,
    nom: false,
    uni: false,
    fuent: false,
    resp: false
  }

  onAddClick = () => {
    var usado = false;

    this.props.indicadores.map(x => x.id === (this.state.CalificacionCORFO.charAt(0) + this.state.NumeroIndicador) ?
      usado = true
      :x)

    if(this.state.NumeroIndicador === '' || this.state.nombre === '' ||this.state.Unidad === '' || this.state.FuenteInformacion === '' || this.state.Responsable === '' || usado){
      if (usado){
        this.setState( {
          usado : true,
        })
      }else{
        this.setState( {
          usado : false,
        })  
      }
      if (this.state.NumeroIndicador === ''){
        this.setState( {
          num : true,
        })
      }else{
        this.setState( {
          num : false,
        })  
      }
      if (this.state.nombre === ''){
        this.setState( {
          nom : true,
        })
      }else{
        this.setState( {
          nom : false,
        })  
      }
      if (this.state.Unidad === ''){
        this.setState( {
          uni : true,
        })
      }else{
        this.setState( {
          uni : false,
        })  
      }
      if (this.state.FuenteInformacion === ''){
        this.setState( {
          fuent : true,
        })
      }else{
        this.setState( {
          fuent : false,
        })  
      }
      if (this.state.Responsable === ''){
        this.setState( {
          resp : true,
        })
      }else{
        this.setState( {
          resp : false,
        })  
      }

      swal({
        text: "Error! los campos no se llenaron correctamente",
        icon: "error",
        timer: "2000"
      })

    }else{

      axios.post('http://localhost:4000/indicadores/addindicadores',{
        id: (this.state.CalificacionCORFO.charAt(0) + this.state.NumeroIndicador),
        CalificacionCORFO : this.state.CalificacionCORFO,
        NumeroIndicador : this.state.NumeroIndicador,
        MisionUniversitaria : this.state.MisionUniversitaria,
        nombre : this.state.nombre,
        TipoIndicador: this.state.TipoIndicador,
        eje : this.state.eje,
        Unidad : this.state.Unidad,
        FuenteInformacion : this.state.FuenteInformacion,
        Responsable : this.state.Responsable,
        Frecuencia : this.state.Frecuencia,
        idMetrica : this.state.idMetrica,
      })

      this.setState( {
        CalificacionCORFO : 'Mínimo',
        NumeroIndicador: '',
        MisionUniversitaria : 'Primera',
        nombre : '',
        TipoIndicador: 'Entrada resultado',
        eje : 'Gobernanza y Sinergias',
        Unidad : '',
        FuenteInformacion : '',
        Responsable: '',
        Frecuencia: 'Diario',
        idMetrica: 0,
        num: false,
        nom: false,
        uni: false,
        fuent: false,
        resp: false,
        usado: false
      })
      swal({
        text: "'Solicitud enviada correctamente'",
        icon: "success",
        timer: "2000"
      })

    }
  }

  render(){
    return(
      <>
      <form>
        <label>Calificación CORFO</label>
        <select value={this.state.CalificacionCORFO} onChange={e => this.setState({
          CalificacionCORFO: e.target.value
        })}>
          <option value="Mínimo">Mínimo</option>
          <option value="Crítico">Crítico</option>
        </select>

        <label>Número de Indicador</label>
        {this.state.usado?
          <>
          <input type="text" value={this.state.NumeroIndicador} style={{borderColor: 'red'}} onChange={e => this.setState({
          NumeroIndicador: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Ya existe un Indicador con esa id</p>
          </>
        : this.state.num?
          <>
          <input type="text" value={this.state.NumeroIndicador} style={{borderColor: 'red'}} onChange={e => this.setState({
          NumeroIndicador: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.NumeroIndicador} onChange={e => this.setState({
            NumeroIndicador: e.target.value
          })}/>
        }
        
        <label>Misión Universitaria</label>
        <select value={this.state.MisionUniversitaria} onChange={e => this.setState({
          MisionUniversitaria: e.target.value
        })}>
          <option value="Primera">Primera</option>
          <option value="Segunda">Segunda</option>
          <option value="Tercera">Tercera</option>
          <option value="General">General</option>
        </select>

        <label>Nombre del indicador</label>
        {this.state.nom?
          <>
          <input type="text" value={this.state.nombre}  style={{borderColor: 'red'}}onChange={e => this.setState({
            nombre: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.nombre} onChange={e => this.setState({
            nombre: e.target.value
          })}/>
        }

        <label>Tipo de Indicador</label>
        <select value={this.state.TipoIndicador} onChange={e => this.setState({
          TipoIndicador: e.target.value
        })}>
          <option value="Entrada resultado">Entrada resultado</option>
          <option value="Resultado">Resultado</option>
          <option value="Proceso">Proceso</option>
          <option value="Impacto">Impacto</option>
        </select>

        <label>Eje al que pertenece</label>
        <select value={this.state.eje} onChange={e => this.setState({
          eje: e.target.value
        })}>
          <option value="Gobernanza y Sinergias">Gobernanza y Sinergias</option>
          <option value="Gestión del Cambio y Capital Humano Avanzado">Gestión del Cambio y Capital Humano Avanzado</option>
          <option selected value="I+D Aplicado y Vínculo con Sector Productivo">I+D Aplicado y Vínculo con Sector Productivo</option>
          <option value="Comercialización de Tecnología y Emprendimiento de Base Tecnológica">Comercialización de Tecnología y Emprendimiento de Base Tecnológica</option>
          <option value="Alianzas Internacionales">Alianzas Internacionales</option>
          <option value=" Armonización Curricular y postgrados tecnológicos"> Armonización Curricular y postgrados tecnológicos</option>
        </select>

         <label>Unidad de medida</label>

        {this.state.uni?
          <>
          <input type="text" value={this.state.Unidad} style={{borderColor: 'red'}} onChange={e => this.setState({
            Unidad: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.Unidad} onChange={e => this.setState({
            Unidad: e.target.value
          })}/>
        }

        <label>Fuente de Informacion</label>

        {this.state.fuent?
          <>
          <input type="text" value={this.state.FuenteInformacion} style={{borderColor: 'red'}} onChange={e => this.setState({
            FuenteInformacion: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
        <input type="text" value={this.state.FuenteInformacion} onChange={e => this.setState({
          FuenteInformacion: e.target.value
        })}/>
        }

        <label>Responsable</label>

        {this.state.resp?
          <>
          <input type="text" value={this.state.Responsable} style={{borderColor: 'red'}} onChange={e => this.setState({
            Responsable: e.target.value
          })}/>
          <p style={{fontSize: '12px'}}>Este campo es obligatorio</p>
          </>
        :
          <input type="text" value={this.state.Responsable} onChange={e => this.setState({
            Responsable: e.target.value
          })}/>
        }
        
        <label>Frecuencia de medición</label>
        <select value={this.state.Frecuencia} onChange={e => this.setState({
          Frecuencia: e.target.value
        })}>
          <option value="Diario">Diario</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensual">Mensual</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </select>

        <label>Metrica</label>
        <select value={this.state.idMetrica} onChange={e => this.setState({
          idMetrica: e.target.value
        })}>
          <option value={0}>-</option>
          {this.props.metricas.map((x, i) =>
          x.Aprobado === 1 ?
          <option value={x.id}>{x.nombre}</option>
          :
          <div/>
          )}
        </select>
        
      </form>
      <button onClick={
          () => this.onAddClick()
        }>Enviar solicitud</button>
      </>
    );
  }
}

export default AddIndicador;