import React from "react";
import '../stylesheets/NavBar.css';
import CartWidget from "./CartWidget";
function NavBar(){
    return(
        <header className="container-fluid">
      <div className="row" id="header">
        <div className="col text-center align-items-center w-bold">
          <img className="imagenlogo" src={require('../images/logo.png')} alt="logo" />
          <h1 className='text-center'>BTS ARMY</h1>
          <div>
            <ul>
              <li className="d-inline-block">
                <button>
                  <a href="./index.html">INICIO</a>
                </button>
              </li>
              <li className="d-inline-block">
                <button>
                  <a href="./pages/miembros.html">MIEMBROS</a>
                </button>
              </li>
              <li className="d-inline-block">
                <button>
                  <a href="./pages/discografia.html">DISCOGRAFIA</a>
                </button>
              </li>
              <li className="d-inline-block">
                <button>
                  <a href="./pages/army.html">MERCHANDISING</a>
                </button>
              </li>
              <li className="d-inline-block">
                <button>
                  <a href="./pages/info.html">CONTACTO</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </div>
      
    </header>
    )

}
export default NavBar;