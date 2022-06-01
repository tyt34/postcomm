import React, { useEffect } from 'react'
import def_ava from "../../../images/def_avatar.png"
import './Avatar.scss'

function Avatar({ setPopupOpen, avatarLink, setAvatarProfile }) {
  useEffect( () => {
    if (avatarLink === 'default') {
      setAvatarProfile(def_ava)
    } else {
      setAvatarProfile(avatarLink)
    }
  }, [avatarLink])

  function handleEditAvatarClick() {
    setPopupOpen(true)
    window.addEventListener('keydown', closeOnEsc)
  }

  const closeOnEsc = (e) => {
    if (e.keyCode === 27) {
      setPopupOpen(false)
    }
  }

  return (
    <div
      className="avatar"
    >
      <img
        className="avatar__img"
        alt="Изображение профиля"
        src={avatarLink}
      />
      <div
        onClick={handleEditAvatarClick}
        className="avatar__overlay"
      >
        <button
          className="avatar__edit"
          type="button"
        >
        </button>
      </div>
    </div>
  )
}

export default Avatar
