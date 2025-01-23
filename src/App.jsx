import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import EjemploContadorEventListener from './components/Ejemplos/EjemploContadorEventListener/EjemploContadorEventListener'
import { CartProvider } from './context/CartContex'
import './App.css'

function App() {
  
  return (
    <div className='container-app'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenido a la Tienda Oficial en México"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Productos por Categoría"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

         <Route path='*' element={<NotFoundPage />} />
         <Route path="/Ejemplos" element={<EjemploContadorEventListener />} />
        </Routes>
        </CartProvider> 
      </BrowserRouter>
    </div>
  )
}

export default App
