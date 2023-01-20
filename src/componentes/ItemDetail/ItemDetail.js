import React from "react";
import './ItemDetail.css';
import Card from 'react-bootstrap/Card'


const ItemDetail = (props) => {//Funcion constructora

    const {id, nombre, precio}=props.data
   
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
        </article>


    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemDetail;