import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AuthBut, AuthField, Footer } from '../../components'
import { log } from '../../utils'
import {
  routerConfig,
  textAuthDescr,
  textAuthIntro,
  timeForShowErr
} from '../../constants'
import './style.scss'

export const Loggin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [button, setButton] = useState(false)
  const [logErr, setLogErr] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  useEffect(() => {
    if (name === '' || pass === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [name, pass])

  const handleLog = (e) => {
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
          navigate(routerConfig.profile.url)
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

  const clearStatusFetch = () => {
    setLogErr('')
  }

  const handleLinkReg = (e) => {
    e.preventDefault()
    navigate(routerConfig.reg.url)
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
