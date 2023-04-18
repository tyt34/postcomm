import React, { useEffect, useState } from 'react'
import './styles.scss'
import { updateAvatar } from '../../../../utils/api'

export const PopupAva = ({
  isOpen,
  setPopupOpen,
  setAvatarProfile
}) => {
  const [avatar, setAvatar] = useState('')
  const [button, setButton] = useState(false)

  useEffect(() => {
    if (avatar === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [avatar])

  function handleClosePopup() {
    setPopupOpen(false)
  }

  function handeUpdateAvatar(e) {
    e.preventDefault()
    updateAvatar(avatar)
      .then((arg) => {
        setPopupOpen(false)
        setAvatarProfile(avatar)
        setAvatar('')
      })
      .catch((err) => {
        console.log('Err#10 ', err)
      })
  }

  function handleChangeURLAva(e) {
    setAvatar(e.target.value)
  }

  return (
    <div id="popup" className={isOpen ? 'popup popup_open' : 'popup'}>
      <div className="popup__container">
        <button
          id="popup__close"
          onClick={handleClosePopup}
          className="popup__close"
          type="button"
        ></button>
        <p className="popup__title">Изменить аватар</p>
        <form name="ava" className="popup__form">
          <input
            id="popup-avatar-link"
            className="popup__input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            value={avatar}
            onChange={handleChangeURLAva}
            required
          />

          <button
            id="popup__save"
            className={
              button ? 'popup__save' : 'popup__save button__close'
            }
            onClick={handeUpdateAvatar}
            disabled={button ? '' : 'disabled'}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupAva
