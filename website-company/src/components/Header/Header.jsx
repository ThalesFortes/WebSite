import { Link } from "react-router-dom"

import Logo from "../../assets/logo-enterprise.svg"
import "./Header.css"

function Header () {
  return(
    <>
      <header>
        <div className="container">
          <div className="al-center d-flex jc-space-between">
            <Link to="/"><img src={Logo} alt="logo da empresa dnc" /></Link>
            <nav>
              <ul className="d-flex">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header