import React from 'react';
import css from "./style.module.css";
import { useState } from "react";

const Burger = () => {

    const [state, setState] = useState(false);
    const menu = [
        {
            id: 1,
            name: "Home",
            link: "/home"
        },
        {
            id: 2,
            name: "About",
            link: "/about"
        },
        {
            id: 3,
            name: "Menu",
            link: "/menu"
        },
        {
            id: 4,
            name: "Order",
            link: "/order"
        },
        {
            id: 5,
            name: "Contact",
            link: "/contact"
        },
        {
            id: 6,
            name: "Locations",
            link: "/locations"
        },
        {
            id: 7,
            name: "Blog",
            link: "/blog"
        },
        {
            id: 8,
            name: "Careers",
            link: "/careers"
        }
    ];

    console.log(menu);

    const showMenu = () => {
        setState(!state);
        console.log(state);
    }

    return (
        <div>
            <button className={css.menuButton} onClick={showMenu}>
                <span className={css.buttonPart}></span>
                <span className={css.buttonPart}></span>
                <span className={css.buttonPart}></span>
            </button>
            <ul>
                {
                    menu.map(({id, name}) => (
                        <li className={menuItem} key={id}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Burger