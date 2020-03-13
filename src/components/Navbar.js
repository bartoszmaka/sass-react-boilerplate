import React, { useState } from 'react'

import { ReactComponent as Brand } from './Icons/Brand.svg'
import { ReactComponent as Hamburger } from './Icons/Hamburger.svg'

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__section -main">
        <Brand className="navbar__icon" />
        <span className="navbar__brand-name">Zabdos</span>
      </div>
      <div className="navbar__section -desktop-flex">
        <button className="navbar__item -btn" type="button">Flight Status</button>
        <button className="navbar__item -btn -primary" type="button">Check In</button>
        <img className="navbar__avatar" src="https://i.pravatar.cc/200" alt="avatar" />
      </div>
      <div className="navbar__section">
        <button className="navbar__item" onClick={() => setMenuVisible(!menuVisible)}>
          <Hamburger className="navbar__icon" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
