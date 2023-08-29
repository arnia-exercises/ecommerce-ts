import { Dispatch, SetStateAction } from "react"
import InnerHeader from "../../components/InnerHeader"
import CartProduct from "../../components/CartProduct"

type CartProps = {
  cart: Array<ProductCartType>
  setCart: Dispatch<SetStateAction<Array<ProductCartType>>>
}

const Cart = ({ cart, setCart }: CartProps) => (
  <div>
    <InnerHeader title="Carrinho" cartSize={cart.length} />
    {cart.map((product) => (
      <CartProduct
        {...product}
        addQuantity={() => {}}
        removeQuantity={() => {}}
      />
    ))}
  </div>
)

export default Cart
