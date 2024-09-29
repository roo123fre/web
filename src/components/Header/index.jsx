import React from 'react'
import css from "./style.module.css"
import BurgerMenu from '../BurgerMenu'
import logo from "../../static/logo.svg"


const Header = () => {
  return (
    <div className="container">
      <header className={css.header}>
        <a className="logo" href='#'>
          <img src={logo} alt='logo' />
        </a>
        <nav>
          <BurgerMenu />
        </nav>
      </header>
    </div>

  )
}

export default Header