import InnerHeader from "../../components/InnerHeader"
import { convertToReal } from "../../utils/functions"

type Props = {
  cart: Array<ProductCartType>
}

export default function Checkout ({ cart }: Props) {
  return (
    <div>
      <InnerHeader title="Checkout" />

      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} width={100} height={100} />
        </div>
      ))}


      <h2>Total Produtos: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}</h2>
      <h2>Total: {convertToReal(cart.reduce((acc, curr) => acc + (curr.value * curr.quantity), 0))}</h2>

    </div>
  )
}
