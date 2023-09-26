import React from 'react'
import styles from './RecipeCard.module.css'

export default function InstructionsList(props) {
  const {instructions} = props
  return (
    <div className={styles.instructions_list}>
      <h3 className={styles.list_title}>Instructions</h3>
      <ol>
        {instructions.map((i, index) => (
          <li className={styles.list_item} key={index}>{i}</li>
        ))}
      </ol>
    </div>
  )
}
