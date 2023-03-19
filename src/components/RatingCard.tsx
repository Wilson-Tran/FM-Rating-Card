import React from "react"
import styles from "./RatingCard.module.css"
import star from "../assets/icon-star.svg"

export default function RatingCard() {
  return (
    <div className={styles.card}>
      <img className={styles.star} src={star} alt="orange star icon" />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className={styles.container}>{[1, 2, 3, 4, 5].map((rating) => <button className={styles.ratings}>{rating}</button>)}</div>
      <button className={styles.submit}>SUBMIT</button>
    </div>
    
  )
}