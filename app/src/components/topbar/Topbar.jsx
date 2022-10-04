import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/indicadores">
              Indicadores
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/metricas">
              Metricas
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/metas">
              Metas
            </Link>
          </li>
          </ul>
      </div>
      
        <div className="topRight">
          <li className="topListItem">
            <Link className="link" to="/peticiones">
              Solicitudes
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/datos">
              Indicadores
            </Link>
          </li>
          </div>
      {/* <div className="topRight">
          <Link to="/settings">
            "Hola"
          </Link>
      </div> */}
    </div>
  );
}