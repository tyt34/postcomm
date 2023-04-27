import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthBut, AuthField, Footer } from '../../components'
import { reg } from '../../utils'
import {
  routerConfig,
  textAuthDescr,
  textAuthIntro,
  timeForShowErr
} from '../../constants'
import styles from './registration.module.scss'

const Registration = () => {
  const navigate = useNavigate()
  const [messageErr, setMessageErr] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [pass, setPass] = useState('')
  const [button, setButton] = useState(false)

  useEffect(() => {
    if (name === '' || surname === '' || pass === '') {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [name, surname, pass])

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeSurname = (e) => {
    setSurname(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  const clearStatusFetch = () => {
    setMessageErr('')
  }

  const handleReg = (e) => {
    e.preventDefault()
    reg(name, surname, pass)
      .then((data) => {
        if (data.status !== 'ok') {
          throw data
        } else {
          localStorage.clear()
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('name', data.name)
          localStorage.setItem('surname', data.surname)
          navigate(routerConfig.profile.url)
        }
      })
      .catch((err) => {
        if (err.message) {
          setMessageErr(err.message)
          setTimeout(clearStatusFetch, timeForShowErr)
        }
      })
  }

  const handleLinkLog = (e) => {
    e.preventDefault()
    navigate(routerConfig.log.url)
  }

  return (
    <section className={styles.main}>
      <p className={styles.title}>{textAuthIntro}</p>
      <p className={styles.title}>{textAuthDescr}</p>
      <form name={'reg'}>
        <AuthField
          name="Имя"
          idName="name"
          typeInput="name"
          value={name}
          onChange={handleChangeName}
        />
        <AuthField
          name="Псевдоним"
          idName="surname"
          typeInput="surname"
          value={surname}
          onChange={handleChangeSurname}
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
        handleReg={handleReg}
        textInButt="Зарегистрироваться"
      />
      <p className={styles.err}>{messageErr}</p>
      <Footer
        textIntro="Уже зарегистрированы? Тогда"
        handleLink={handleLinkLog}
        textEnter="войдите"
        href={routerConfig.log.url}
      />
    </section>
  )
}

export default Registration
