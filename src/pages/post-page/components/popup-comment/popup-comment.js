import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import def_ava from '../../../../images/def_avatar.png'
import { createComment } from '../../../../utils/api.js'

import './styles.scss'

export const PopupComment = ({ isOpen, setPopupOpen, idPost }) => {
  const dispatch = useDispatch()
  const infoAboutNewComment = useSelector((state) => state.check)
  const [text, setText] = useState('')
  const [avatar, setAvatar] = useState('')
  const [button, setButton] = useState(false)

  useEffect(() => {
    if (text === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [text])

  useEffect(() => {
    if (localStorage.avatar === 'default') {
      setAvatar(def_ava)
    } else {
      setAvatar(localStorage.avatar)
    }
  }, [localStorage.avatar])

  function handleClosePopup() {
    setPopupOpen(false)
  }

  function handeSendComment(e) {
    e.preventDefault()
    createComment(text, idPost)
      .then((data) => {
        if (data.status) {
          if (data.status === 'ok') {
            dispatch({
              type: 'CHANGE_INFO_NEW_COM',
              payload: infoAboutNewComment
            })
            setPopupOpen(false)
            setText('')
          }
        }
      })
      .catch((err) => {
        console.log('Err#6 ', err)
      })
  }

  return (
    <div
      id="popup-comment"
      className={
        isOpen ? 'popup-comment popup-comment_open' : 'popup-comment'
      }
    >
      <div className="popup-comment__container">
        <button
          id="popup-comment__close"
          onClick={handleClosePopup}
          className="popup-comment__close"
          type="button"
        ></button>
        <p className="popup-comment__title">
          Добавить новый комментарий
        </p>

        <p className="popup-comment__text">Комментарий от имени:</p>

        <section className="popup-comment__profile">
          <img
            alt="user ava"
            className="popup-comment__ava"
            src={avatar}
          />
          <p className="popup-comment__prof-text">
            {localStorage.name} - {localStorage.surname}
          </p>
        </section>

        <form name="ava" className="popup-comment__form">
          <textarea
            className="popup-comment__area"
            name="inputText"
            placeholder="Поле для ввода комментария"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          ></textarea>

          <button
            id="popup-comment__save"
            className={
              button
                ? 'popup-comment__save'
                : 'popup-comment__save popup-comment__save-close'
            }
            type="submit"
            disabled={button ? '' : 'disabled'}
            onClick={handeSendComment}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}
