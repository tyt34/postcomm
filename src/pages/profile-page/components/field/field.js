import React, { memo } from 'react'
import styles from './field.module.scss'

const Field = ({ name, value, onChange, placeHolder, mixClass }) => {
  return (
    <div
      className={
        mixClass ? `${styles.main} ${styles.top}` : `${styles.main}`
      }
    >
      <p className={styles.name}>{name}</p>
      <input
        value={value}
        onChange={onChange}
        id="profile-name"
        className={styles.input}
        name="name"
        type="text"
        placeholder={placeHolder}
        minLength="1"
        maxLength="30"
        required
      />
    </div>
  )
}

export default memo(Field, (prev, next) => {
  if (prev.value !== next.value) {
    return false
  } else {
    return true
  }
})
