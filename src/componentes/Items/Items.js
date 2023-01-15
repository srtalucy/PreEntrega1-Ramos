import React, { useEffect, useState } from "react";
import '../Items/Items.css';
import AddCartBtn from "../AddCartBtn/AddCartBtn";



function Items(props){
   

   
   return (
        
         <div className="col-8 mb-2 col-md-4 text-center mt-4 mx-4">
            <div className="card" id={props.id}> 
                <img src={props.imagen} alt='' className="img-top d-flex align-self-center"/>
                <div className="card-body"> 
                    <h5>{props.nombre}</h5>
                    <span className="d-flex text-center justify-content-center">€<p>{props.precio}</p></span>
                    <AddCartBtn/>
                    </div>
             </div>
        </div>
   )
}

export default  Items;
 
       

