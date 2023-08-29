import Boleto from "../../assets/images/boleto.png"
import Hipercard from "../../assets/images/hipercard.png"
import MasterCard from "../../assets/images/master_card.png"
import Visa from "../../assets/images/visa.png"

const Footer = () => (
  <div>
    <p>Meios de pagamento:</p>
    <img src={Boleto} />
    <img src={Hipercard} />
    <img src={MasterCard} />
    <img src={Visa} />
  </div>
)

export default Footer
