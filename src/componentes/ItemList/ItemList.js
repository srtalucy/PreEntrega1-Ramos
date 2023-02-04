import './ItemList.css'
import Items from '../Items/Items';
import React, {useState, useEffect} from "react";

const ItemList = ()=>{
    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);
  const ItemsHTML = items.map(i =><Items key= {i.id} data={i}/>)
  return(
    <div className='col-12 containerProductos'>
        {ItemsHTML}
    </div>
  )
}

export default ItemList;