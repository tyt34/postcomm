import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost, getAvaForPrevPost } from '../../../../utils/api.js'
import { getTimeDay, getTimeClock } from '../../../../utils/consts.js'
import def_ava from '../../../../images/def_avatar.png'
import { CommentsList } from '../comment-list'
import { PopupComment } from '../popup-comment'

import './styles.scss'

export const OnePost = () => {
  let { idPost } = useParams()
  const [header, setHeader] = useState(null)
  const [text, setText] = useState(null)
  const [avatar, setAvatar] = useState(def_ava)
  const [dateText, setDateText] = useState(null)
  const [timeDay, setTimeDay] = useState(null)
  const [name, setName] = useState(null)
  const [surname, setSurname] = useState(null)
  const [timeClock, setTimeClock] = useState(null)
  const [owner, setOwner] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    if (dateText !== null && dateText !== undefined) {
      const d = dateText.split(' ')
      setTimeDay(getTimeDay(d, 'long'))
      setTimeClock(getTimeClock(d))
    }
  }, [dateText])

  useEffect(() => {
    getPost(idPost)
      .then((post) => {
        setHeader(post.data[0].header)
        setText(post.data[0].text)
        setDateText(post.data[0].dateText)
        setOwner(post.data[0].owner)
      })
      .catch((err) => {
        console.log('Err#7 ', err)
      })
  }, [])

  useEffect(() => {
    if (owner !== null) {
      getAvaForPrevPost(owner)
        .then((user) => {
          setName(user.name)
          setSurname(user.surname)
          if (user.avatar === 'default') {
            setAvatar(def_ava)
          } else {
            setAvatar(user.avatar)
          }
        })
        .catch((err) => {
          console.log('Err#8 ', err)
        })
    }
  }, [owner])

  function handleOpenPopapCreateComment() {
    setPopupOpen(true)
  }

  return (
    <section className="post">
      <h2 className="post__title">Пост №{idPost}</h2>
      <section className="post__profile">
        <img alt="user ava" className="post__ava" src={avatar} />
        <section className="post__profile-text">
          <p className="post__date">
            Дата поста: {timeClock} - {timeDay}
          </p>
          <p className="post__name">
            Автор поста: {name} - {surname}
          </p>
        </section>
      </section>

      <section className="post__mess">
        <p className="post__header">{header}</p>
        <p className="post__text">{text}</p>
      </section>

      <button
        className="post__but"
        type="submit"
        onClick={handleOpenPopapCreateComment}
      >
        <p className="post__but-title">
          Открыть форму для добавления комментария
        </p>
      </button>

      <CommentsList idPost={idPost} />

      <PopupComment
        isOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        idPost={idPost}
      />
    </section>
  )
}
