type ProductType = {
  id: string
  name: string
  value: number
  image: string
}

type ProductCartType = ProductType & {
  quantity: number
}

type Screens = "PRODUCTS" | "CART" | "CHECKOUT"
