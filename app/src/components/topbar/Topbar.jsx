import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
        {/* <div className="topLeft">
            <a href="https://www.uach.cl/" target="_blank" className="topLogoLink">
                Hola
            </a>
        </div> */}
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
        </ul>
      </div>
      {/* <div className="topRight">
          <Link to="/settings">
            "Hola"
          </Link>
      </div> */}
    </div>
  );
}