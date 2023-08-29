type ProductProps = ProductType & {
  addProductToCart: (product: ProductType) => void
  removeProductFromCart: (productId: string) => void
  isOnCart: boolean
}

const Product = ({
  id,
  name,
  value,
  image,
  addProductToCart,
  removeProductFromCart,
  isOnCart,
}: ProductProps) => (
  <div>
    <img src={image} alt={name} width={100} height={100} />
    <input
      type="checkbox"
      checked={isOnCart}
      onChange={(event) => {
        if (event.target.checked) {
          addProductToCart({ id, name, value, image })
          return
        }
        removeProductFromCart(id)
      }}
    />
    <p>Valor: R${value.toFixed(2).replace(".", ",")}</p>
  </div>
)

export default Product
