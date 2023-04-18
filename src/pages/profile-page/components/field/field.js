import React from 'react'
import './styles.scss'

export const Field = ({
  name,
  value,
  onChange,
  placeHolder,
  mixClass
}) => {
  return (
    <div className={mixClass ? 'field field-top' : 'field'}>
      <p className="field__name">{name}</p>
      <input
        value={value}
        onChange={onChange}
        id="profile-name"
        className="field__input"
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

export default React.memo(Field, (prev, next) => {
  if (prev.value !== next.value) {
    return false
  } else {
    return true
  }
})
