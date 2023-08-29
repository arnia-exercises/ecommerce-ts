import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

export default BaseLayout
