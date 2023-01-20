import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
//Estilos
import './ItemDetailContainer.css'

//Componentes
import ItemDetail from '../ItemDetail/ItemDetail'

//Core

/*#############################################
                 Logica
###############################################*/
const ItemDetailContainer = () => {//Funcion constructora

    const [productos, setProductos] = useState([])

    const { productoId } = useParams()

   
      useEffect(() => {
        fetch('/productos.json')
          .then(response => response.json())
          .then(productos => setProductos(<ItemDetail key={productos.id} id={'producto'+ productos.id} data={productos}/> ))
      }, [productoId]);
    return (
        <div className='ItemDetail-box'>
            {productos}
            </div>
            
      
    )
}

export default ItemDetailContainer;
