import { Link } from "react-router-dom";

const Item = ({ product }) => {
  // Verificar si hay imágenes disponibles
  const imageSrc = product.image && product.image.length > 0 ? product.image[0] : "/img/default-image.png";

  // Formatear el precio de manera adecuada
  const formattedPrice = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  }).format(product.price);

  return (
    <div className="item">
      <img src={imageSrc} width={100} alt={`Imagen de ${product.name}`} />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Precio: {formattedPrice}</p>

      <Link to={`/detail/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
