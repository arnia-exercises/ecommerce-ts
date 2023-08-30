type CartProductProps = ProductType & {
  quantity: number
  addQuantity: (product: ProductCartType) => void
  removeQuantity: (product: ProductCartType) => void
}

const CartProduct = ({ addQuantity, removeQuantity, ...product }: CartProductProps) => {
  const { name, image, value, quantity } = product

  return (
    <div>
      <img src={image} width={100} height={100} />
      <p>{name}</p>
      <p>Valor: R${value.toFixed(2).replace(".", ",")}</p>
      <p>Quantidade: {quantity}</p>
      <button onClick={() => addQuantity(product)}>+</button>
      <button onClick={() => removeQuantity(product)}>-</button>
    </div>
  )
}
export default CartProduct
