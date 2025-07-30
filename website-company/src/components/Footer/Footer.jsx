import { useContext } from "react"
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

// CONTEXT
import { AppContext } from "../../contexts/AppContext"
import Button from "../Button/Button"

function Footer (){
  const appContext = useContext(AppContext)
  if (appContext.loading || !appContext.languages) {
    return null // ou um spinner
  }
  const changeLanguage = (country) => {
    appContext.setLanguage(country)
  }
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" alt="logo da empresa" />
            <p className="gray-1-color">
              {appContext.languages[appContext.language].general.footerLogoText}
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
          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                <li><Link to="/contact">{appContext.languages[appContext.language].menu.projects}</Link></li>
                <li><Link to="/projects">{appContext.languages[appContext.language].menu.contact}</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.contact}</h3>
              <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
              <p className="grey-1-color">suporte@escoladnc.com.br</p>
              <p className="grey-1-color">(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-1-color">Copyright © DNC - 2024</p>
          <div className="d-flex langs-area ">
            <Button buttonStyle={"unstyled"} onClick={()=> changeLanguage("br")}>
              <img src={BrazilIcon} height="29px" alt="icone do brazil" />
            </Button>
            <Button buttonStyle={"unstyled"} onClick={()=> changeLanguage("en")}>
              <img src={UsaIcon} height="29px"  alt="icone dos estados unidos" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer