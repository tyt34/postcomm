import AuthField from '../AuthField/AuthField'
import AuthBut from '../AuthBut/AuthBut'
import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import './Log.scss'
import * as api from '../../../utils/api.js'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Loggin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('') // плохо, что такое же название как в компоненте рег
  const [nameErr, setNameErr] = useState('')
  const [pass, setPass] = useState('')
  const [passErr, setPassErr] = useState('')
  const [button, setButton] = React.useState(false)

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangePass(e) {
    setPass(e.target.value)
  }

  useEffect( () => {
    if ( (name === '') || (pass === '') ) {
      setButton(false)
      console.log(' but close ')
    } else {
      setButton(true)
      console.log(' but open ')
    }
  }, [name, pass])

  function handleLog(e) {
    e.preventDefault()
    api.log(name, pass)
    .then( (data) => {
      if (data.status !== 'ok') {
        throw data
      } else {
        console.log(' norm ', data)
        dispatch({ type: 'SAVE_ID_USER', payload: data.userId})
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('name', data.user.name)
        localStorage.setItem('surname', data.user.surname)
        navigate('/profile')
      }
    })
    .catch(
      (err) => {
        console.log(' reg er: ', err)
      }
    )
  }

  function handleLinkReg(e) {
    e.preventDefault()
    navigate('/reg')
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
        handleReg={handleLog}
        textInButt="Залогиниться"
      />

      <Footer
        textIntro="Еще не зарегистрировались? Тогда"
        handleLink={handleLinkReg}
        textEnter="регистрируйтесь скорее"
      />
    </section>
  )
}

export default Loggin
