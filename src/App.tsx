import { useState } from "react"
import BaseLayout from "./layout/BaseLayout"
import ProductsList from "./pages/ProductsList"
import { SCREENS } from "./assets/constants/screens"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {
  const [cart, setCart] = useState<Array<ProductCartType>>([])
  const [currentScreen, setCurrentScreen] = useState<Screens>(SCREENS.PRODUCTS)

  function getScreen() {
    if (currentScreen === SCREENS.PRODUCTS) {
      return (
        <ProductsList
          cart={cart}
          setCart={setCart}
          setCurrentScreen={setCurrentScreen}
        />
      )
    }

    if (currentScreen === SCREENS.CART) {
      return <Cart
        cart={cart}
        setCart={setCart}
        setCurrentScreen={setCurrentScreen}
      />
    }

    return <Checkout cart={cart} />
  }

  return (
    <>
      <BaseLayout>{getScreen()}</BaseLayout>
    </>
  )
}

export default App
