import React from 'react'
import axios from 'axios'
import dateFormat, {masks} from "dateformat";
import swal from 'sweetalert'

class ListaMetricas extends React.Component {    

  state = {
    idMetricasA: [],
    idMetricasD: []
  }

  onAprobarClick = () => {
    swal({
        title:"Aprobar",
        text: "¿Estás seguro que deseas aprobar estas solicitudes?",
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta => {
        if (respuesta){
            let today = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
            for(let i=0; i < this.state.idMetricasA.length ; i++){ 
                axios.put(`http://localhost:4000/metricas/setaprobado/${this.state.idMetricasA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idMetricasD.length ; i++){ 
                axios.put(`http://localhost:4000/metricas/deletemetricas/${this.state.idMetricasD[i]}_Eliminar_${today}`)
            }
            this.setState( {
                idMetricasA: [],
                idMetricasD: []
              })
            swal({
                text: "Las solicitudes se aceptaron correctamente",
                icon: "success",
                timer: "2000"
            })
        }
    })
  }

  onRechazarClick = () => {
    swal({
        title:"Rechazar",
        text: "¿Estás seguro que deseas rechazar estas solicitudes?",
        icon: "warning",
        buttons: ["No", "Si"]
    }).then(respuesta => {
        if (respuesta){
            let today = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
            for(let i=0; i < this.state.idMetricasA.length ; i++){ 
                axios.put(`http://localhost:4000/metricas/deletemetricas/${this.state.idMetricasA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idMetricasD.length ; i++){ 
                axios.put(`http://localhost:4000/metricas/setaprobado/${this.state.idMetricasD[i]}_Eliminar_${today}`)
            }
            this.setState( {
                idMetricasA: [],
                idMetricasD: []
              })
            swal({
                text: "Las solicitudes se rechazaron correctamente",
                icon: "success",
                timer: "2000"
            })
        }
    })

  }

  render(){
    const AStyle = {
        color: 'rgb(48, 147, 59)'
    };

    const DStyle = {
        color: 'rgb(170, 25, 25)'
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
            <th>Tipo de solicitud</th>
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