import './Items.css';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import { Link } from 'react-router-dom';

const Items = (props)=>{
  const {id, nombre, precio, imagen}=props.data
    return (
        <div className=" col-md-3 text-center mt-4 cardContainer">
          
            <div className="card" key={id}>
              <img src={imagen} alt='' className="img-top d-flex align-self-center"/>
              <h5>{nombre}</h5>
              <span className="d-flex text-center justify-content-center">€<p>{precio}</p></span>
              <AddCartBtn/>
              <button className='btn btn-secondary detail'><Link to={`/Productos/${id}`}> Ver Detalle del Producto </Link></button>
            </div>
        </div>
      );
}

export default Items;