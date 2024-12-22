const Item = ({ product }) => {
  return (
    <div className="item">
        <img src= {product.image} width={100} alt="" />
        <p>{product.name}</p>
          <p>{product.description}</p>
          <p>precio: {product.price}</p>

  </div>
  )
}

export default Item