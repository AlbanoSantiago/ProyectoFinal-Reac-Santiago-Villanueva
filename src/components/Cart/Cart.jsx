import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContex";
import { useNavigate } from "react-router-dom"; // Asegúrate de tener instalado react-router-dom
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)
  const navigate = useNavigate(); // Inicializa el hook de navegación

  // Estados para el flujo de la factura
  const [requiresInvoice, setRequiresInvoice] = useState(false)
  const [invoiceData, setInvoiceData] = useState({
    name: "", rfc: "", cp: "",
  })

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    setInvoiceData({...invoiceData, [e.target.name]: e.target.value,})
  }

  // Calcular IVA y Total con IVA
  const subtotal = totalPrice()
  const iva = subtotal * 0.16
  const totalWithIVA = subtotal + iva

  // Validar si los campos están completos
  const isFormComplete = () => invoiceData.name.trim() !== "" && invoiceData.rfc.trim() !== "" && invoiceData.cp.trim() !== ""

  // Resetear datos de factura
  const resetInvoiceData = () => {
    setInvoiceData({ name: "", rfc: "", cp: "" })
    setRequiresInvoice(false)
  }

  // Función para regresar al Home
  const goHome = () => {
    navigate("/"); // Navega a la página principal (Home)
  }

  // Early return: si el carrito está vacío, retorna lo que debe renderizarse
  if (cart.length === 0) {
    return (
      <div className="empty-cart"> 
      <p className="empty-cart-message">Upppsss... El Carrito esta Vacio</p>
        <button onClick={goHome} className="go-home-button">Regresar a la Tienda</button>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1 className="cart-header">Productos en el Carrito</h1>
      {cart.map((productCart) => (
        <div key={productCart.id} className="product-item">
          <img src={productCart.image[0] || "/img/placeholder.png"} alt={productCart.name} onError={(e) => (e.target.src = "/img/placeholder.png")} />
          <div className="product-details">
            <p>{productCart.name}</p>
            <p>Precio de c/u:{" "}<span className="product-price">${productCart.price} MXN</span> 
            </p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Subtotal:{" "} <span className="product-price"> ${productCart.price * productCart.quantity} </span> </p>
          </div>
          <div className="product-buttons">
            <button onClick={() => deleteProductById(productCart.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="cart-footer">
        <p>Precio total: ${totalPrice()} MXN</p>
        <button onClick={deleteCart}>Vaciar Carrito</button>
      </div>

      {/* Botón para preguntar si requiere factura */}
      <div className="invoice-section">
        {!requiresInvoice ? (
          <button onClick={() => setRequiresInvoice(true)}>¿Requiere Factura?</button>
        ) : (
          <button onClick={resetInvoiceData} className="cancel-invoice-button">Cancelar Factura</button>
        )}
      </div>

      {/* Formulario para la factura */}
      {requiresInvoice && (
        <div className="invoice-form">
          <h2>Datos para la Factura</h2>
          <label>Nombre o Razón Social:
            <input
              type="text"
              name="name"
              value={invoiceData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>RFC:
            <input
              type="text"
              name="rfc"
              value={invoiceData.rfc}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Código Postal:
            <input
              type="text"
              name="cp"
              value={invoiceData.cp}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Mostrar desglose de precios */}
          {isFormComplete() && (
            <div className="invoice-summary">
              <h3>Resumen de Factura</h3>
              <p>Subtotal: ${subtotal.toFixed(2)} MXN</p>
              <p>IVA (16%): ${iva.toFixed(2)} MXN</p>
              <p>
                <strong>Total con IVA: ${totalWithIVA.toFixed(2)} MXN</strong>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Cart;
