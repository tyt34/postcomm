import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../../utils'
import { timeForShowErr } from '../../../../constants'
import './styles.scss'

export const CreatePost = () => {
  const dispatch = useDispatch()
  const [header, setHeader] = useState('')
  const [text, setText] = useState('')
  const [statusCreateMess, setStatusCreateMess] = useState('')
  const [button, setButton] = useState(false)

  useEffect(() => {
    if (header === '' || text === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [header, text])

  const handeCreatePost = (e) => {
    e.preventDefault()
    setStatusCreateMess('Идет отправка данных...')
    createPost(header, text)
      .then((data) => {
        if (data.status) {
          if (data.status === 'ok') {
            setStatusCreateMess('Данные отправлены')
            dispatch({
              type: 'CREATE_NEW_POST',
              payload: data.data.user
            })
            setTimeout(clearStatusFetch, timeForShowErr)
            setText('')
            setHeader('')
          }
        }
      })
      .catch((err) => {
        console.log('Err#9 ', err)
      })
  }

  const clearStatusFetch = () => {
    setStatusCreateMess('')
  }

  return (
    <form name="ava" className="post-form">
      <input
        id="popup-avatar-link"
        className="post-form__input"
        onChange={(e) => {
          setHeader(e.target.value)
        }}
        name="link"
        type="text"
        value={header}
        placeholder="Заголовок поста"
        required
      />
      <textarea
        className="post-form__area"
        name="inputText"
        placeholder="Поле для ввода текста"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      ></textarea>
      <button
        id="asdasdasdasdasd"
        className={
          button
            ? 'post-form__but'
            : 'post-form__but post-form__but-close'
        }
        type="submit"
        onClick={handeCreatePost}
        disabled={button ? '' : 'disabled'}
      >
        Сделать пост публичным
      </button>
      <p className="post-form__status">{statusCreateMess}</p>
    </form>
  )
}
