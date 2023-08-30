import { Dispatch, SetStateAction } from "react"
import InnerHeader from "../../components/InnerHeader"
import CartProduct from "../../components/CartProduct"
import Button from "../../components/Button"
import { SCREENS } from "../../assets/constants/screens"

type CartProps = {
  cart: Array<ProductCartType>
  setCart: Dispatch<SetStateAction<Array<ProductCartType>>>
  setCurrentScreen: Dispatch<SetStateAction<Screens>>
}

const Cart = ({ cart, setCart, setCurrentScreen }: CartProps) => {
  
  const addQuantity = (product: ProductCartType) => {
    setCart(cart.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item
    }))
  }
  
  const removeQuantity = (product: ProductCartType) => {

    if (product.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id))
      return
    }

    setCart(cart.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }

      return item
    }))
  }

  return (
    <div>
      <InnerHeader title="Carrinho" cartSize={cart.reduce((acc, curr) => acc + curr.quantity , 0)} />
      {cart.map((product) => (
        <CartProduct
          key={product.id}
          {...product}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      ))}

      <Button onClick={() => setCurrentScreen(SCREENS.CHECKOUT)}>
        Ir para o Checkout
      </Button>
    </div>
  )
}

export default Cart
