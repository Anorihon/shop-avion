import React from 'react'
import styles from './MainImage.module.scss'

function MainImages() {
 
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.texts}>
          <h2>
            Luxury homeware for people
            <br />
            who love timeless design quality
          </h2>
          <h1>
            With our new collectin, view over 400 bespoke pieces from homeware
            through to forniture today
          </h1>
          <p>Shop the new Spring 2023 collection today</p>
          <button className={styles.button}>View collection</button>
          <img src="/img/baner/Baner2.webp" alt="Main" />
        </div>
      </div>
    </div>
  )
}

export default MainImages