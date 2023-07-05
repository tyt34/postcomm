import styles from './auth-but.module.scss'

export const AuthBut = ({ button, handleReg, textInButt }) => {
  return (
    <button
      id="form-send"
      className={button ? styles.but : `${styles.but} ${styles.close}`}
      type="submit"
      onClick={handleReg}
      disabled={button ? '' : 'disabled'}
    >
      {textInButt}
    </button>
  )
}
