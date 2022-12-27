import React from "react";
import '../stylesheets/ItemListContainer.css';

function ItemListContainer(props){
  return(
    <div className="col-sm-12 row" id="items">
            <div className="container carrito">
              <div className="col-12">
            
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody id="item"></tbody>
                <tfoot>
                  <tr id="row footer">
                  <th scope="col">{props.id}</th>
                    <th scope="col">{props.title}</th>
                    <th scope="col">{props.cantidad}</th>
        
                    <th scope="col">{props.total}</th>

                  </tr>
                </tfoot>
              </table>
              </div>
          </div>
        </div>
  )
}
ItemListContainer.defaultProps={
    title: 'Proof',
    id: 546,
    cantidad: 1,
    total: '€60',
}





export default ItemListContainer;