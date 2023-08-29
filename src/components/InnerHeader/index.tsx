type InnerHeaderProps = {
  title: string
  cartSize?: number
}

const InnerHeader = ({ title, cartSize }: InnerHeaderProps) => (
  <div>
    <h1>{title}</h1>
    {cartSize !== undefined && <div>{cartSize}</div>}
  </div>
)

export default InnerHeader
