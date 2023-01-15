
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Items from './componentes/Items/Items';
import data from '/productos.json'
function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer>

        {data.map((p)=>
          <Items key={p.id} nombre={p.nombre} precio={p.precio}/>
         
        )};


        
      </ItemListContainer>
      
    </div>
  );
}

export default App;
