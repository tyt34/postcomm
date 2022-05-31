import './PopupAva.scss'
import React, { useEffect, useState } from 'react'
import * as api from '../../../utils/api.js'

function PopupAva({isOpen, setPopupOpen, setAvatarProfile}) {
  const [avatar, setAvatar] = useState('')
  const [button, setButton] = useState(false)

  useEffect( () => {
    console.log(avatar)
    if (avatar === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [avatar])

  function handleClosePopup() {
    console.log('try close popup')
    setPopupOpen(false)
  }

  function handeUpdateAvatar(e) {
    e.preventDefault()
    console.log(' up ava ', avatar)

    api.updateAvatar(
      avatar,
    )
    .then(
      (arg) => {
        console.log(' ===> ', arg)
        setPopupOpen(false)
        setAvatarProfile(avatar)
        setAvatar('')
      }
    )
    .catch(
      (err) => {
        console.log('Err#10 ', err)
      }
    )

  }

  function handleChangeURLAva(e) {
    //console.log(' ==> ')
    //e.preventDefault()
    setAvatar(e.target.value)
  }

  return (
    <div
      id="popup"
      className={isOpen ? "popup popup_open" : "popup"}
    >
      <div className="popup__container">
        <button
          id="popup__close"
          onClick={handleClosePopup}
          className="popup__close"
          type="button"
        ></button>
        <p
          className="popup__title"
        >
          Изменить аватар
        </p>
        <form
          name="ava"
          className="popup__form"
        >
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
              button ? "popup__save" : "popup__save button__close"
            }
            onClick={handeUpdateAvatar}
            disabled={ button ? '' : 'disabled'}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupAva;
