import styles from './auth-field.module.scss'

export const AuthField = ({
  name,
  idName,
  typeInput,
  value,
  onChange
}) => {
  return (
    <div className={styles.main}>
      <p className={styles.name}>{name}</p>
      <input
        id={`field-log-reg-${idName}`}
        className={styles.input}
        name="name"
        minLength="2"
        maxLength="30"
        type={typeInput}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}
