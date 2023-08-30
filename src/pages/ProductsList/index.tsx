import { Dispatch, SetStateAction } from "react"
import products from "../../assets/constants/products.json"
import Product from "../../components/Product"
import InnerHeader from "../../components/InnerHeader"
import Button from "../../components/Button"
import { SCREENS } from "../../assets/constants/screens"

type ProductsListProps = {
  cart: Array<ProductCartType>
  setCart: Dispatch<SetStateAction<Array<ProductCartType>>>
  setCurrentScreen: Dispatch<SetStateAction<Screens>>
}

const ProductsList = ({
  cart,
  setCart,
  setCurrentScreen,
}: ProductsListProps) => {
  function addProductToCart(product: ProductType) {
    setCart([...cart, { ...product, quantity: 1 }])
  }

  function removeProductFromCart(productId: string) {
    const newCart = cart.filter(({ id }) => id !== productId)
    setCart(newCart)
  }

  return (
    <div>
      <InnerHeader title="Produtos" cartSize={cart.length} />
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addProductToCart={addProductToCart}
            removeProductFromCart={removeProductFromCart}
            isOnCart={cart.some(({ id }) => id === product.id)}
          />
        ))}
      </div>
      <Button onClick={() => setCurrentScreen(SCREENS.CART)}>
        Ir para o carrinho
      </Button>
    </div>
  )
}

export default ProductsList
