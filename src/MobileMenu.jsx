import React from 'react'
import styles from './styles/mobilemenu.module.css'

const MobileMenu = (props) => {
  return (
    <div className={props.openMobile? styles.mobilemenu : `${styles.mobilemenuactive} ${styles.mobilemenu}`}>
        <a href="">How we work</a>
        <a href="">Blog</a>
        <a href="">Account</a>
        <a href="">View plans</a>
    </div>
  )
}

export default MobileMenu