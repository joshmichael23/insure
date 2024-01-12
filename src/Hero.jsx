import React from 'react'
import styles from './styles/hero.module.css'
import MobileMenu from './MobileMenu'

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.mobilepic}></div>
      <div className={styles.content}>
        <section className={styles.top}>
        <div>
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our expertise
            and technology to help you find the plan that’s right for you. Ensure you
            and your loved ones are protected.
          </p>
          <button>View plans</button>
        </div>

        <div className={styles["desktoppic-container"]}>
          <img className={styles["desktop-pic"]}src="/image-intro-desktop.jpg" alt="" />
        </div>
        </section>
        <section className={styles.bottom}>
          -
        </section>

        <div className={styles["mobile-background"]}>

        </div>

        <div className={styles["desktop-background"]}></div>
        
      </div>

      <MobileMenu openMobile={props.openMobile}></MobileMenu>
    </div>

    
  )
}

export default Hero