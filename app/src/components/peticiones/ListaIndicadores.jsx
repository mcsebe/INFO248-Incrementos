import React from 'react'
import axios from 'axios'
import dateFormat, {masks} from "dateformat";
import swal from 'sweetalert'

class ListaIndicadores extends React.Component {    

  state = {
    idIndicadoresA: [],
    idIndicadoresD: [],
    idIndicadoresE: []
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
            for(let i=0; i < this.state.idIndicadoresA.length ; i++){ 
                axios.put(`http://localhost:4000/indicadores/setaprobado/${this.state.idIndicadoresA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idIndicadoresD.length ; i++){ 
                axios.put(`http://localhost:4000/indicadores/deleteindicadores/${this.state.idIndicadoresD[i]}_Eliminar_${today}`)
            }
            for(let i=0; i < this.state.idIndicadoresE.length ; i++){ 
                let e = this.state.idIndicadoresE[i];
                console.log("e: ", e);
                let ids_aux = e.split(",");
                console.log("ids_aux: ", ids_aux, "tipo: ", typeof ids_aux);
                
                
                let id_eliminar = ids_aux[1];
                let id_reemplazar = ids_aux[0];
                
                //console.log("funciona: ", myArray);
                axios.delete(`http://localhost:4000/indicadores/eliminarindicador/${id_eliminar}`)
                axios.put(`http://localhost:4000/indicadores/setaprobado/${id_reemplazar}_Editar_${today}`)
                console.log("termina");
            }
            this.setState( {
                idIndicadoresA: [],
                idIndicadoresD: [],
                idIndicadoresE: []
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
            for(let i=0; i < this.state.idIndicadoresA.length ; i++){ 
                axios.put(`http://localhost:4000/indicadores/deleteindicadores/${this.state.idIndicadoresA[i]}_Añadir_${today}`)
            }
            for(let i=0; i < this.state.idIndicadoresD.length ; i++){ 
                axios.put(`http://localhost:4000/indicadores/setaprobado/${this.state.idIndicadoresD[i]}_Eliminar_${today}`)
            }
            for(let i=0; i < this.state.idIndicadoresE.length ; i++){ 
                let e = this.state.idIndicadoresE[i];
                let ids_aux = e.split(",");
                let id_reemplazar = ids_aux[0];
                axios.delete(`http://localhost:4000/indicadores/eliminarindicador/${id_reemplazar}`)
            }
            this.setState( {
                idIndicadoresA: [],
                idIndicadoresD: [],
                idIndicadoresE: []
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

    const EStyle = {
        color: 'rgb(64, 168, 248)'
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
            <th>Tipo de solicitud</th>
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
                : indicador.Peticion === 'Eliminar' ?
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
                :
                <td>
                <input
                className='checkbox'
                type="checkbox"
                name="lang"
                value={[indicador.id, indicador.id_editado]}
                onChange={e => this.state.idIndicadoresE.includes(e.target.value) ? this.state.idIndicadoresE = this.state.idIndicadoresE.filter((item) => 
                    item !== e.target.value) 
                    : 
                    this.state.idIndicadoresE.push(e.target.value)
                  }/>
                </td>
                }
                <td>{indicador.id}</td>
                <td>{indicador.CalificacionCORFO}</td>
                <td>{indicador.NumeroIndicador}</td>
                <td>{indicador.MisionUniversitaria}</td>
                <td>{indicador.nombre}</td>
                <td>{indicador.TipoIndicador}</td>
                {this.props.ejes.map((eje) => (
                        indicador.eje === eje.id?
                        <td>{eje.nombre}</td>
                        :
                        <></>
                    ))}
                <td>{indicador.Unidad}</td>
                <td>{indicador.FuenteInformacion}</td>
                <td>{indicador.Responsable}</td>
                <td>{indicador.Frecuencia}</td>
                {indicador.Peticion === 'Añadir'?
                    <td style={AStyle}>{indicador.Peticion}</td>
                    : indicador.Peticion === 'Eliminar'?
                    <td style={DStyle}>{indicador.Peticion}</td>
                    :
                    <td style={EStyle}>{indicador.Peticion}</td>}
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