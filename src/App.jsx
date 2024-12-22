import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'

function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a la Tienda Oficial en México"}/>

        <ItemDetailContainer />

    </div>
    
  )
}

export default App
