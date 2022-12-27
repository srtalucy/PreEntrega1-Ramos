import React from "react";
import '../stylesheets/CartWidget.css'
function CartWidget(){
    return(
        <div className="row carritoImagen">
            <img className='col imagenCarrito' src={require('../images/carrito.png')} alt='imagen Carrito' />
        <p className="col">1 producto</p>
    </div>
    )
        
}

export default CartWidget;