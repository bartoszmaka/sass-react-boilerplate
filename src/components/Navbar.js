import React, { useState } from 'react'

import logo from './Icons/Brand.svg'
import hamburger from './Icons/Hamburger.svg'

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__section -main">
        <img className="navbar__logo-icon" src={logo} alt='logo' />
        <span className="navbar__logo-text">Zabdos</span>
      </div>
      <div className="navbar__section -desktop-only">
        <button className="navbar__item -btn" type="button">Flight Status</button>
        <button className="navbar__item -btn -primary" type="button">Check In</button>
        <img className="navbar__avatar" src="https://i.pravatar.cc/200" alt="avatar" />
      </div>
      <div className="navbar__section">
        <button className="navbar__item" onClick={() => setMenuVisible(!menuVisible)}>
          <img src={hamburger} alt="navbar collapse" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
