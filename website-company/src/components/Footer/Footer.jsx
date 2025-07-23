import { Link } from "react-router-dom"

// ASSETS
import "./Footer.css"
import BrazilIcon  from "../../assets/brazil-icon.svg"
import Logo from "../../assets/logo-enterprise.svg"
import UsaIcon  from "../../assets/eua-icon.svg"
import FacebookIcon  from "../../assets/facebook-icon.svg"
import LinkedinIcon  from "../../assets/linkedin-icon.svg"
import InstagramIcon  from "../../assets/instagram-icon.svg"
import TwitterIcon  from "../../assets/twitter-icon.svg"


function Footer (){
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between">
          <div className="footer-logo-col">
            <img src={Logo} alt="logo da empresa" />
            <p className="gray-1-color">
              A escola que prepara você para as profissões em alta no mercado de trabalho.
            </p>
            <div className="d-flex social-links">
              <a href="#" target="_blank">
                <img src={FacebookIcon} alt="icone do facebook" />
              </a>
              <a href="#" target="_blank">
                <img src={TwitterIcon} alt="icone do Twitter" />
              </a>
              <a href="#" target="_blank">
                <img src={LinkedinIcon} alt="icone do linkedin" />
              </a>
              <a href="#" target="_blank">
                <img src={InstagramIcon} alt="icone do instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer