import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthField from '../AuthField/AuthField'
import AuthBut from '../AuthBut/AuthBut'
import Footer from '../Footer/Footer'
import { reg } from '../../../utils/api.js'
import {
  textAuthIntro,
  textAuthDescr,
  timeForShowErr
}  from '../../../utils/consts.js'
import './Reg.scss'

function Reg() {
  const navigate = useNavigate()
  const [messageErr, setMessageErr] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [pass, setPass] = useState('')
  const [button, setButton] = React.useState(false)

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value)
  }

  function handleChangePass(e) {
    setPass(e.target.value)
  }

  function clearStatusFetch() {
    setMessageErr('')
  }

  useEffect( () => {
    if ( (name === '') || (surname === '') || (pass === '') ) {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [name, surname, pass])

  function handleReg(e) {
    e.preventDefault()
    reg(name, surname, pass)
    .then( (data) => {
      if (data.status !== 'ok') {
        throw data
      } else {
        localStorage.clear()
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('name', data.name)
        localStorage.setItem('surname', data.surname)
        navigate('/profile')
      }
    })
    .catch(
      (err) => {
        if (err.message) {
          setMessageErr(err.message)
          setTimeout(clearStatusFetch, timeForShowErr)
        }
      }
    )
  }

  function handleLinkLog(e) {
    e.preventDefault()
    navigate('/log')
  }

  return (
    <section className="log">
      <p className="reg__title">
        {textAuthIntro}
      </p>
      <p className="reg__title">
        {textAuthDescr}
      </p>
      <form
        name={'reg'}
        className="reg"
      >
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
      <p className="reg__err">
        {messageErr}
      </p>
      <Footer
        textIntro="Уже зарегистрированы? Тогда"
        handleLink={handleLinkLog}
        textEnter="войдите"
      />
    </section>
  )
}

export default Reg
