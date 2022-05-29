import './Profile.scss'
import Field from './Field/Field'
import PopupAva from './PopupAva/PopupAva'
import CreatePost from './CreatePost/CreatePost'
import SliderPost from './SliderPost/SliderPost'
import Avatar from './Avatar/Avatar'
import React, { useEffect, useState } from 'react'
import * as api from '../../utils/api.js'

function Profile() {
  const [nameProfile, setNameProfile] = useState('')
  const [surnameProfile, setSurnameProfile] = useState('')
  const [emailProfile, setEmailProfile] = useState('')
  const [phoneProfile, setPhoneProfile] = useState('')
  const [companyProfile, setCompanyProfile] = useState('')
  const [jobPostProfile, setJobPostProfile] = useState('')
  const [avatarProfile, setAvatarProfile] = useState('')
  const [popupOpen, setPopupOpen] = useState(false)
  const [statusFetch, setStatusFetch] = useState('')

  useEffect( () => {
    api.getUser()
    .then(
      (arg) => {
        console.log(arg)
        let {name, surname, email, phone, company, jobpost, avatar} = arg
        setNameProfile(name)
        setSurnameProfile(surname)
        setEmailProfile(email)
        setPhoneProfile(phone)
        setCompanyProfile(company)
        setJobPostProfile(jobpost)
        setAvatarProfile(avatar)
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })
  }, [])

  function handleChangeName(e) {
    setNameProfile(e.target.value)
  }

  function handleChangeSurname(e) {
    setSurnameProfile(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmailProfile(e.target.value)
  }

  function handleChangePhone(e) {
    setPhoneProfile(e.target.value)
  }

  function handleChangeСompany(e) {
    setCompanyProfile(e.target.value)
  }

  function handleChangePost(e) {
    setJobPostProfile(e.target.value)
  }

  function handeSaveDataProfile() {
    setStatusFetch('Идет отправка данных...')
    console.log(' save ')
    api.updateUser(
      nameProfile,
      surnameProfile,
      emailProfile,
      phoneProfile,
      companyProfile,
      jobPostProfile
    )
    .then(
      (arg) => {
        console.log(arg)
        if (arg.status === 'bad') {
          throw arg
        } else if (arg.error) {
          throw arg
        } else {
          setStatusFetch('Данные изменены')
          setTimeout(clearStatusFetch, 4000)
          //setButtonError('')
          //setTestSuccess('Данные изменены')
          //setTimeout(textSuccess, 4000)
          //setName(arg.name)
        }
      }
    )
    .catch(
      (err) => {
        console.log('Err#10 ', err)
        if (err.message) {
          setStatusFetch(err.message)
          setTimeout(clearStatusFetch, 4000)
        }
      }
    )
  }

  function clearStatusFetch() {
    setStatusFetch('')
  }

  return (
      <section className="profile">
        <h1 className="profile__title"> Профиль пользователя</h1>
        <section className="profile__top">
          <Avatar
            setPopupOpen={setPopupOpen}
            avatarLink={avatarProfile}
            setAvatarProfile={setAvatarProfile}
          />
          <section className="profile__top-fields">
            <Field
              name='Имя'
              value={nameProfile}
              setValue={setNameProfile}
              onChange={handleChangeName}
              placeHolder={'Имя пользователя'}
              mixClass="top"
            />
            <Field
              name='Псевдоним'
              value={surnameProfile}
              setValue={setSurnameProfile}
              onChange={handleChangeSurname}
              placeHolder={'Псевдоним пользователя'}
              mixClass="top"
            />
          </section>
        </section>
        <Field
          name='Email'
          value={emailProfile}
          setValue={setEmailProfile}
          onChange={handleChangeEmail}
          placeHolder={'Email пользователя'}
        />
        <Field
          name='Телефонный номер'
          value={phoneProfile}
          setValue={setPhoneProfile}
          onChange={handleChangePhone}
          placeHolder={'Номер пользователя'}
        />
        <Field
          name='Компания'
          value={companyProfile}
          setValue={setCompanyProfile}
          onChange={handleChangeСompany}
          placeHolder={'Компания пользователя'}
        />
        <Field
          name='Должность'
          value={jobPostProfile}
          setValue={setJobPostProfile}
          onChange={handleChangePost}
          placeHolder={'Должность пользователя'}
        />

      <PopupAva
        isOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        setAvatarProfile={setAvatarProfile}
      />
      <button
        className="profile__but-save"
        type="submit"
        onClick={handeSaveDataProfile}
      >
        <p className="profile__but-title">
          Сохранить текущие данные
        </p>
      </button>
      <p className="profile__status">
        {statusFetch}
      </p>
      <SliderPost/>
      <CreatePost/>
    </section>
  )
}

export default Profile
