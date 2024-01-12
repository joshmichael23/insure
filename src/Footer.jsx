import React from 'react'
import styles from './styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.top}>
            <img src="/logo.svg" alt="" />
            
            <div className={styles.socialmedialinks}>
                <a href=""><img src="/icon-facebook.svg" alt="" /></a>
                <a href=""><img src="/icon-twitter.svg" alt="" /></a>
                <a href=""><img src="/icon-pinterest.svg" alt="" /></a>
                <a href=""><img src="/icon-instagram.svg" alt="" /></a>
            </div>
            
        </div>
        

        <nav>
            <div>
                <p>Our company</p>
                <a href="">How we work</a>
                <a href="">Why Insure?</a>
                <a href="">View plans</a>
                <a href="">Reviews</a>
            </div>
       

            <div>
                <p>Help me</p>
                    <a href="">FAQ</a>
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Cookies</a>
            </div>

            <div>
                <p>Contact</p>
                <a href="">Sales</a>
                <a href="">Support</a>
                <a href="">Live chat</a>
            </div>

            <div>
                <p>Others</p>
                <a href="">Careers</a>
                <a href="">Press</a>
                <a href="">Licenses</a>
            </div>

        </nav>





    </footer>
  )
}

export default Footer