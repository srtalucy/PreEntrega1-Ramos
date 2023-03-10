import React from "react";
import './ItemDetail.css';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

const ItemDetail = ({id, nombre, precio}) => {//Funcion constructora

   
    return (

        <article className='itemDetail-producto'>
            <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
            <Card className='card-separated'>
                <Card.Header as="h5">{id}</Card.Header>
                <Card.Body>
                    <Card.Title>{nombre}|| Value ={precio}</Card.Title>
                    <Card.Text>
                       Descripcion
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <h2><Link className='volverP'to='/Productos'>Volver a los productos</Link></h2>
        </article>


    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemDetail;