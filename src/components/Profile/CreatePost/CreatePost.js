import './CreatePost.scss'
import React, { useEffect, useState } from 'react'
import * as api from '../../../utils/api.js'
import { useDispatch, useSelector } from 'react-redux'

function CreatePost() {
  const dispatch = useDispatch()
  const [header, setHeader] = useState('')
  const [text, setText] = useState('')
  const [statusCreateMess, setStatusCreateMess] = useState('')

  function handeCreatePost(e) {
    e.preventDefault()
    setStatusCreateMess('Идет отправка данных...')
    console.log(' create post ', header, text)
    api.createPost(header, text)
    .then(
      (arg) => {
        console.log(arg.status)
        if (arg.status) {
          if (arg.status === 'ok') {
            setStatusCreateMess('Данные отправлены')
            console.log(' M E S: ', arg.data.user)
            dispatch({ type: 'CREATE_NEW_POST', payload: arg.data.user})
            setTimeout(clearStatusFetch, 4000)
          } else {
            setStatusCreateMess('Скорее всего, вы не заполнили одно из полей')
            setTimeout(clearStatusFetch, 4000)
          }
        }
      }
    )
    .catch( (err) => {
      console.log('Err#9 ', err)
    })
  }

  function clearStatusFetch() {
    setStatusCreateMess('')
  }

  return (
    <form
      name="ava"
      className="post-form"
    >
      <input
        id="popup-avatar-link"
        className="post-form__input"
        onChange={e => {
          setHeader(e.target.value)
        }}
        name="link"
        type="text"
        placeholder="Заголовок поста"
        required
      />
      <textarea
        className='post-form__area'
        name="inputText"
        placeholder="Поле для ввода текста"
        onChange={e => {
          setText(e.target.value)
        }}
      >
      </textarea>
      <button
        id="asdasdasdasdasd"
        className="post-form__but"
        type="submit"
        onClick={handeCreatePost}
      >
        Сделать пост публичным
      </button>
      <p className="post-form__status">
        {statusCreateMess}
      </p>
    </form>
  )
}

export default CreatePost
