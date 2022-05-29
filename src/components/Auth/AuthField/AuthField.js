import './AuthField.scss'

function AuthField(props) {


  return (
    <>
      <div className="field-log-reg">
        <p className="field-log-reg__name">
          {props.name}
        </p>
        <input
          id={`field-log-reg-${props.idName}`}
          className="field-log-reg__input"
          name="name"
          minLength="2"
          maxLength="30"
          type={props.typeInput}
          value={props.value}
          onChange={props.onChange}
          required
        />
        <span
          id={`field-log-reg-${props.idName}-err`}
          className="field-log-reg__error"
        >
          {props.textInputErr}
        </span>
      </div>
    </>
  )
}

export default AuthField
