import { useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/logo-enterprise.svg"
import "./Header.css"

// COMPONENTS
import Button from "../Button/Button"

function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  return(
    <>
      <header>
        <div className="container">
          <div className="al-center d-flex jc-space-between">
            <Link to="/"><img src={Logo} alt="logo da empresa dnc" /></Link>
            <div className="mobile-menu">
              <Button buttonStyle="secondary" onClick={()=> toggleMenu()}>Menu</Button>
            </div>
            <nav className={`${isOpen ? "open": " "} `}>
              <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={()=> toggleMenu()}>X</Button>
              <ul className="d-flex">
                <li><Link to="/">Home</Link></li>
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