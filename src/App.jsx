import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenido a la Tienda Oficial en México"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Productos por Categoría"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
          
        
      </BrowserRouter>

    </div>
    
  )
}

export default App
