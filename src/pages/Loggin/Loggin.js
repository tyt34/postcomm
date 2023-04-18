import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Footer from '../../components/footer/footer'
import { log } from '../../utils/api.js'
import {
  textAuthIntro,
  textAuthDescr,
  timeForShowErr
} from '../../utils/consts.js'
import { AuthBut, AuthField } from '../../components'

import './style.scss'

export const Loggin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [button, setButton] = useState(false)
  const [logErr, setLogErr] = useState('')

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangePass(e) {
    setPass(e.target.value)
  }

  useEffect(() => {
    if (name === '' || pass === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [name, pass])

  function handleLog(e) {
    e.preventDefault()
    log(name, pass)
      .then((data) => {
        if (data.status !== 'ok') {
          throw data
        } else {
          dispatch({ type: 'SAVE_ID_USER', payload: data.userId })
          localStorage.clear()
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('name', data.user.name)
          localStorage.setItem('surname', data.user.surname)
          navigate('/profile')
        }
      })
      .catch((err) => {
        console.log('Err#14 ', err)
        if (err.message) {
          setLogErr(err.message)
          setTimeout(clearStatusFetch, timeForShowErr)
        }
      })
  }

  function clearStatusFetch() {
    setLogErr('')
  }

  function handleLinkReg(e) {
    e.preventDefault()
    navigate('/reg')
  }

  return (
    <section className="log">
      <p className="reg__title">{textAuthIntro}</p>
      <p className="reg__title">{textAuthDescr}</p>
      <form name={'reg'} className="reg">
        <AuthField
          name="Имя"
          idName="name"
          typeInput="name"
          value={name}
          onChange={handleChangeName}
        />
        <AuthField
          name="Пароль"
          idName="pass"
          typeInput="password"
          value={pass}
          onChange={handleChangePass}
        />
      </form>

      <AuthBut
        button={button}
        handleReg={handleLog}
        textInButt="Залогиниться"
      />

      <p className="log__err">{logErr}</p>

      <Footer
        textIntro="Еще не зарегистрировались? Тогда"
        handleLink={handleLinkReg}
        textEnter="регистрируйтесь скорее"
        href={'/reg'}
      />
    </section>
  )
}
