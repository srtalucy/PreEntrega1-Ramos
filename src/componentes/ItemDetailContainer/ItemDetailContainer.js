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

    const [productos, setProductos] = useState({})

    const { productosId } = useParams()
    
    
       const getProduct = (id) => {
      fetch('/productos.json')
      .then(response => response.json())
      .then(productos => setProductos(productos.find(el => el.id === parseInt(id))))
    }
   
      useEffect(() => {
        getProduct(productosId);
      }, [productosId]);
    return (
        <div className='ItemDetail-box'>
            <ItemDetail {...productos}/>
            </div>
            
      
    )
}

export default ItemDetailContainer;
