import React, { useEffect, useState } from 'react'
import './styles.css'

export const Navbar = () => {
  const [show, setShow] = useState(false)

  useEffect(()=>{
  window.addEventListener("scroll", ()=>{
    setShow(window.scrollY>100)
  })
  
  },[])
    
  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' className="nav-logo" alt='Netflix'></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU' className="nav-avatar" alt='avatar'></img>
    </div>
  )
}
