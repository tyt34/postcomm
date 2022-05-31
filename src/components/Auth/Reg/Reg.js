import AuthField from '../AuthField/AuthField'
import AuthBut from '../AuthBut/AuthBut'
import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import './Reg.scss'
import * as api from '../../../utils/api.js'
import { useNavigate} from 'react-router-dom'

function Reg() {
  const navigate = useNavigate()
  const [messageErr, setMessageErr] = useState('')
  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [surname, setSurname] = useState('')
  const [surnameErr, setSurnameErr] = useState('')
  const [pass, setPass] = useState('')
  const [passErr, setPassErr] = useState('')
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

  React.useEffect( () => {
    //console.log(' -> ', name, surname, pass)
    if ( (name === '') || (surname === '') || (pass === '') ) {
      setButton(false)
    } else {
      setButton(true)
    }
  }, [name, surname, pass])

  function handleReg(e) {
    console.log(' reg: ', name)
    e.preventDefault()
    api.reg(name, surname, pass)
    .then( (data) => {
      if (data.status !== 'ok') {
        throw data
      } else {
        console.log(' norm ', data)
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('name', data.name)
        localStorage.setItem('surname', data.surname)
        // тут необходимо получить разрешение на переходы на остальные ссылки
        navigate('/profile')
      }
    })
    .catch(
      (err) => {
        console.log(' reg er: ', err)
        if (err.message) {
          setMessageErr(err.message)
        }
      }
    )
  }

  function handleLinkLog(e) {
    e.preventDefault()
    navigate('/log')
  }

  return (
    <section className="reg">
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
          textInputErr={nameErr}
        />
        <AuthField
          name="Псевдоним"
          idName="surname"
          typeInput="surname"
          value={surname}
          onChange={handleChangeSurname}
          textInputErr={surnameErr}
        />
        <AuthField
          name="Пароль"
          idName="pass"
          typeInput="password"
          value={pass}
          onChange={handleChangePass}
          textInputErr={passErr}
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
/*
if (data.error) {
  throw data
} else if (data.message) {
  console.log(' dat.mes: ', data.message)
} else if (data.status === 'ok') {
  api.reg(name, surname, pass)
  .then( (data) => {
    if (data.status === 'ok') {
      console.log(data)
      //localStorage.clear()
      //localStorage.setItem('jwt', data.token)
      //props.setLoggedIn(true)
      props.setUser({
        name: name,
        email: email,
      })
      //navigate('/movies')
    } else {
      throw data
    }
  })
  .catch(
    (err) => {
      console.log('Err#3 ',err)
    }
  )
}
*/
