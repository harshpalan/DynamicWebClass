import React from 'react'
import styles from './RecipeCard.module.css'
// Hmmm. This looks like a reusable UI component...
// Lets discuss next class
export default function Card(props) {
  return <div className={styles.card}>{props.children}</div>
}
