import './style.scss'

export const AuthField = ({
  name,
  idName,
  typeInput,
  value,
  onChange
}) => {
  return (
    <div className="field-log-reg">
      <p className="field-log-reg__name">{name}</p>
      <input
        id={`field-log-reg-${idName}`}
        className="field-log-reg__input"
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
