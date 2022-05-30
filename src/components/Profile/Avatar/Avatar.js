import './Avatar.scss'
import def_ava from "../../../images/def_avatar.png"
import React, { useEffect, useState } from 'react'

function Avatar({setPopupOpen, avatarLink, setAvatarProfile}) {
  useEffect( () => {
    console.log(avatarLink)
    setAvatarProfile(avatarLink)
    /*
    if (!avatarLink.includes('http')) {
    }
    */
  }, [avatarLink])

  function handleEditAvatarClick() {
    console.log(' click but pop ava ')
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
