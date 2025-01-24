import "./notfoundpage.css"
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
        <h1 className="not-found-error-code">404</h1>
        <p className="not-found-message">Página no encontrada</p>
        <a href="/" className="not-found-link">Volver a la Tienda</a>
      </div>
    );
  };

export default NotFoundPage