import React from "react";
import '../ItemListContainer/ItemListContainer.css';
import Items from "../Items/Items";


function ItemListContainer(props){

  return(
    <div>
    {props.children}
    </div>
    
    
  )
}






export default ItemListContainer;