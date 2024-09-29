import {useState} from 'react'
import css from "./style.module.css"

const BurgerButton = () => {

    const  [active, setActive] = useState(false);
    
    const burgerHandler = () => {
      setActive(!active)
    }

  return (
    <button onClick={burgerHandler} className={css.burgerbtn}>
        <span className={active ? css.burgerstick + " " + css.active: css.burgerstick}></span>
        <span className={active ? css.burgerstick + " " + css.active: css.burgerstick}></span>
        <span className={active ? css.burgerstick + " " + css.active: css.burgerstick}></span>
    </button>
  )
}

export default BurgerButton