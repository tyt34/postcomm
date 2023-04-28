import React, { useEffect } from 'react'
import def_ava from '../../../../images/def_avatar.png'
import styles from './avatar.module.scss'

export const Avatar = ({
  setPopupOpen,
  avatarLink,
  setAvatarProfile
}) => {
  useEffect(() => {
    if (avatarLink === 'default') {
      setAvatarProfile(def_ava)
    } else {
      setAvatarProfile(avatarLink)
    }
  }, [avatarLink])

  const handleEditAvatarClick = () => {
    setPopupOpen(true)
    window.addEventListener('keydown', closeOnEsc)
  }

  const closeOnEsc = (e) => {
    if (e.keyCode === 27) {
      setPopupOpen(false)
    }
  }

  return (
    <div className={styles.main}>
      <img
        className={styles.img}
        alt="Изображение профиля"
        src={avatarLink}
      />
      <div
        onClick={handleEditAvatarClick}
        className={styles.overlay}
      >
        <button
          className={styles.edit}
          type="button"
        ></button>
      </div>
    </div>
  )
}
