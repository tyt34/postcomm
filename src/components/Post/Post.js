import './Post.scss'
import React, { useEffect, useState } from 'react'
import PopupComment from './PopupComment/PopupComment'
import CommentsList from './CommentsList/CommentsList'
import * as api from '../../utils/api.js'
import def_ava from "../../images/def_avatar.png"
import { useParams } from "react-router-dom";

function Post() {
  let { idPost } = useParams();
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
  //const [comments, setComments] = useState([])

  useEffect(() => {
    if ((dateText !== null) && (dateText !== undefined)) {
      const d = dateText.split(' ')
      setTimeDay(d[2]+'/'+d[1]+'/'+d[3][2]+d[3][3])
      setTimeClock(d[4].split(':')[0]+'-'+d[4].split(':')[1])
    }
  }, [dateText])

  useEffect( () => {
    api.getPost(idPost)
    .then(
      (arg) => {
        //console.log(arg)
        setHeader(arg.data[0].header)
        setText(arg.data[0].text)
        setDateText(arg.data[0].dateText)
        setOwner(arg.data[0].owner)
      }
    )
    .catch( (err) => {
      console.log('Err#7 ',err)
    })
  }, [])

  useEffect( () => {
    if (owner !== null) {
      console.log(' get user')
      api.getAvaForPrevPost(owner)
      .then(
        (arg) => {
          //console.log(' получаю аватар ', arg)
          setName(arg.name)
          setSurname(arg.surname)
          //console.log(arg.avatar)
          if (arg.avatar === 'default') {
            setAvatar(def_ava)
          } else {
            setAvatar(arg.avatar)
          }
        }
      )
      .catch( (err) => {
        console.log('Err#8 ',err)
      })
    }
  }, [owner])

  function handleOpenPopapCreateComment() {
    //console.log(' open popup')
    setPopupOpen(true)
  }

  return (
    <section className="post">
      <h2 className="post__title">
        Пост №{idPost}
      </h2>
      <section className="post__profile">
        <img alt="user ava" className="post__ava" src={avatar}/>
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
        <p className="post__header">
          {header}
        </p>
        <p className="post__text">
          {text}
        </p>
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

      <CommentsList
        idPost={idPost}
        //comments={comments}
      />

      <PopupComment
        isOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        idPost={idPost}
      />
    </section>
  )
}

export default Post
