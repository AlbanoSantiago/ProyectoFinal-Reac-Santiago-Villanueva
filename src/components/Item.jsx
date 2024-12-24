import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="item">
        <img src= {product.image} width={100} alt="" />
        <p>{product.name}</p>
          <p>{product.description}</p>
          <p>precio: {product.price}</p>

        <Link to={ "/detail/"+product.id }>ver detalles</Link>
  </div>
  )
}

export default Item