
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './componentes/Home/Home'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>

      <NavBar />

      <Routes>
      
        <Route exact path='/productos' element={<ItemListContainer/>}>
        </Route>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Productos/:productosId' element={<ItemDetailContainer/>}/>
        </Routes>
        
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
