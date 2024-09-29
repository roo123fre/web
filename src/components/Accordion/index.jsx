import React from 'react'
import css from "./style.module.css";
import { useState,useRef } from 'react';


const Accordion = ({title,text}) => {
  const [state, setState] = useState(false)
  const contentRef = useRef(null)

  const handleShow = () =>{
    setState(!state);
    console.log(state)
  }

  return(
    <div className={css.wrapper}>
      <h2>{title}</h2>
      <button onClick={handleShow} className={"${css.accordion} ${state ? css.active : ``} "} > Section 1 </button>
      <div
      ref={contentRef}
      className={css.text}
      style={{maxHeight: state ? `$(contentRef.current.scrollHeight)px` : `0`}}
      >
        <p>{text}</p>
      </div> 
    </div>
  )

}


export default Accordion