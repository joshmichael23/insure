import React from 'react'
import logo from '/logo.svg'
import style from './styles/header.module.css'
import hamburger from '/icon-hamburger.svg'
import close from '/icon-close.svg'

const Header = ({openMobile, setMobileMenu}) => {
  return (
    <div className={style.header}>
        <img src={logo} alt="" />
        <button title="mobileMenu" className={openMobile?style.open:style.close}
                onClick={
                  ()=>{
                    setMobileMenu(openMobile => !openMobile)
                    openMobile? document.body.style.overflow = 'hidden': document.body.style.overflow = 'visible'
                  }
                }
        >
            {openMobile?<img src={hamburger} alt="" />:<img src={close} alt="" />}
        </button>
        
  
  
  
        <nav className={style.desktopmenu}>
            <a href="">How we work</a>
            <a href="">Blog</a>
            <a href="">Account</a>
            <a href="">View plans</a>
        </nav>
    </div>
  )
}

export default Header