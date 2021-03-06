import React from 'react'
import axios from 'axios'

class ListaMetas extends React.Component {    

  state = {
    idMetasA: [],
    idMetasD: []
  }

  onAprobarClick = () => {
    for(let i=0; i < this.state.idMetasA.length ; i++){ 
        axios.put(`http://opentera.inf.uach.cl:82/metas/setaprobado/${this.state.idMetasA[i]}`)
    }
    for(let i=0; i < this.state.idMetasD.length ; i++){ 
        axios.delete(`http://opentera.inf.uach.cl:82/metas/deletemetas/${this.state.idMetasD[i]}`)
    }
  }

  onRechazarClick = () => {
    for(let i=0; i < this.state.idMetasA.length ; i++){ 
        axios.delete(`http://opentera.inf.uach.cl:82/metas/deletemetas/${this.state.idMetasA[i]}`)
    }
    for(let i=0; i < this.state.idMetasD.length ; i++){ 
        axios.put(`http://opentera.inf.uach.cl:82/metas/setaprobado/${this.state.idMetasD[i]}`)
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
        {this.props.metas.map((meta) => (
            meta.Aprobado === 0 ?

            <tr key={meta.id}>
                {meta.Peticion === 'Añadir' ?
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={meta.id}
                    onChange={e => this.state.idMetasA.includes(e.target.value) ? this.state.idMetasA = this.state.idMetasA.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idMetasA.push(e.target.value)
                    }/>
                </td>
                :
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={meta.id}
                    onChange={e => this.state.idMetasD.includes(e.target.value) ? this.state.idMetasD = this.state.idMetasD.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idMetasD.push(e.target.value)
                    }/>
                </td>
                }
                <td>{meta.id}</td>
                <td>{meta.nombre}</td>


                        <td>
                            {this.props.indicadores.map((indicador) => (
                                indicador.idMeta === meta.id ?
                                    <div>
                                    {indicador.id} ㅤㅤㅤㅤ  {indicador.nombre}
                                    <br/>
                                    </div>
                                    :
                                    <div/>
                            ))}
                        </td>


                {meta.Peticion === 'Añadir'?
                    <td style={AStyle}>{meta.Peticion}</td>
                    :
                    <td style={DStyle}>{meta.Peticion}</td>}
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

export default ListaMetas;