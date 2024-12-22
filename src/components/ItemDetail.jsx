const ItemDetail = ({ product }) => {
  return (
    <div className="itemdetail" style={{ display: "flex" }}>
        <img src={product.image} alt="" width={300}/>
        <h2>{product.name}</h2>
        <p> {product.description} </p>
        <p> Precio: {product.price} </p>
    </div>
  )
}

export default ItemDetail