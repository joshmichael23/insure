import React from 'react'
import styles from './styles/subcontent.module.css'

const Subcontent = () => {
  return (
    <div className={styles.subcontent}>

            <h1>We’re different</h1>

            <section>
                <img src="/icon-snappy-process.svg" alt="" />
                <h2>Snappy Process</h2>
                <p>
                    Our application process can be completed in minutes, not hours. Don’t get
                    stuck filling in tedious forms.
                </p>
            </section>

            <section>
                <img src="/icon-affordable-prices.svg" alt="" />
                <h2>Affordable Prices</h2>
                <p>
                    We don’t want you worrying about high monthly costs. Our prices may be low,
                    but we still offer the best coverage possible.
                </p>
            </section>

            <section>
                <img src="/icon-people-first.svg" alt="" />
                <h2>People First</h2>
                <p>
                    Our plans aren’t full of conditions and clauses to prevent payouts. We make
                    sure you’re covered when you need it.
                </p>
            </section>

            <section className={styles.lastSection}>
                <h3>Find out more <span>about how we work</span></h3>
                <button>How we work</button>
            </section>


    </div>
  )
}

export default Subcontent