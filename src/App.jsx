import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a la Tienda Oficial en México"}/>
    </div>
    
  )
}

export default App
