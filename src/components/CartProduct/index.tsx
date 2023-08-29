type CartProductProps = ProductType & {
  quantity: number
  addQuantity: () => void
  removeQuantity: () => void
}

const CartProduct = ({
  id,
  name,
  image,
  value,
  quantity,
  addQuantity,
  removeQuantity,
}: CartProductProps) => (
  <div>
    <img src={image} width={100} height={100} />
    <p>{name}</p>
    <p>Valor: R${value.toFixed(2).replace(".", ",")}</p>
    <p>Quantidade: {quantity}</p>
    <button onClick={addQuantity}>+</button>
    <button onClick={removeQuantity}>-</button>
  </div>
)

export default CartProduct
