import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CreatePost } from '../create-post/create-post.js'
import { Avatar } from '../avatar/avatar.js'
import PopupAva from '../popup-ava/popup-ava.js'
import Field from '../field/field.js'
import { SliderPost } from '../slider-post/slider-post.js'
import {
  getMesForProfile,
  getUser,
  updateUser
} from '../../../../utils/index.js'
import { routerConfig } from '../../../../constants/index.js'
import './styles.scss'

const wait = 'Подождите...'

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nameProfile, setNameProfile] = useState(wait)
  const [surnameProfile, setSurnameProfile] = useState(wait)
  const [emailProfile, setEmailProfile] = useState(wait)
  const [phoneProfile, setPhoneProfile] = useState(wait)
  const [companyProfile, setCompanyProfile] = useState(wait)
  const [jobPostProfile, setJobPostProfile] = useState(wait)
  const [avatarProfile, setAvatarProfile] = useState('')
  const [popupOpen, setPopupOpen] = useState(false)
  const [statusFetch, setStatusFetch] = useState('')

  useEffect(() => {
    getUser()
      .then((user) => {
        let { name, surname, email, phone, company, jobpost, avatar } =
          user
        setNameProfile(name)
        setSurnameProfile(surname)
        setEmailProfile(email)
        setPhoneProfile(phone)
        setCompanyProfile(company)
        setJobPostProfile(jobpost)
        localStorage.setItem('avatar', avatar)
        setAvatarProfile(avatar)
      })
      .catch((err) => {
        console.log('Err#11 ', err)
      })

    getMesForProfile()
      .then((data) => {
        if (data.status) {
          if (data.status === 'ok') {
            dispatch({ type: 'CREATE_ARR_POST', payload: data.data })
          }
        }
      })
      .catch((err) => {
        console.log('Err#12 ', err)
      })
  }, [])

  const handleChangeName = (e) => {
    setNameProfile(e.target.value)
  }

  const handleChangeSurname = (e) => {
    setSurnameProfile(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmailProfile(e.target.value)
  }

  const handleChangePhone = (e) => {
    setPhoneProfile(e.target.value)
  }

  const handleChangeСompany = (e) => {
    setCompanyProfile(e.target.value)
  }

  const handleChangePost = (e) => {
    setJobPostProfile(e.target.value)
  }

  const handeSaveDataProfile = () => {
    setStatusFetch('Идет отправка данных...')
    updateUser(
      nameProfile,
      surnameProfile,
      emailProfile,
      phoneProfile,
      companyProfile,
      jobPostProfile
    )
      .then((data) => {
        if (data.status === 'bad') {
          throw data
        } else if (data.error) {
          throw data
        } else {
          setStatusFetch('Данные изменены')
          setTimeout(clearStatusFetch, 5000)
          localStorage.setItem('name', nameProfile)
          localStorage.setItem('surname', surnameProfile)
        }
      })
      .catch((err) => {
        console.log('Err#13 ', err)
        if (err.message) {
          setStatusFetch(err.message)
          setTimeout(clearStatusFetch, 5000)
        }
      })
  }

  const clearStatusFetch = () => {
    setStatusFetch('')
  }

  const handelLinkAllPosts = (e) => {
    e.preventDefault()
    dispatch({ type: 'CREATE_PAGE_ALL_POSTS', payload: nameProfile })
    navigate(`${routerConfig.allposts.href}${nameProfile}`)
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Профиль пользователя.</h2>
      <h2 className="profile__title">
        Ниже список: слева атрибуты, справа поля для редактирования.
      </h2>
      <section className="profile__info">
        <section className="profile__top">
          <Avatar
            setPopupOpen={setPopupOpen}
            avatarLink={avatarProfile}
            setAvatarProfile={setAvatarProfile}
          />
          <section className="profile__top-fields">
            <Field
              name="Имя"
              value={nameProfile}
              setValue={setNameProfile}
              onChange={handleChangeName}
              placeHolder={'Имя пользователя'}
              mixClass="top"
            />
            <Field
              name="Псевдоним"
              value={surnameProfile}
              setValue={setSurnameProfile}
              onChange={handleChangeSurname}
              placeHolder={'Псевдоним пользователя'}
              mixClass="top"
            />
          </section>
        </section>
        <Field
          name="Email"
          value={emailProfile}
          setValue={setEmailProfile}
          onChange={handleChangeEmail}
          placeHolder={'Email пользователя'}
        />
        <Field
          name="Телефонный номер"
          value={phoneProfile}
          setValue={setPhoneProfile}
          onChange={handleChangePhone}
          placeHolder={'Номер пользователя'}
        />
        <Field
          name="Компания"
          value={companyProfile}
          setValue={setCompanyProfile}
          onChange={handleChangeСompany}
          placeHolder={'Компания пользователя'}
        />
        <Field
          name="Должность"
          value={jobPostProfile}
          setValue={setJobPostProfile}
          onChange={handleChangePost}
          placeHolder={'Должность пользователя'}
        />
        <button
          className="profile__but-save"
          type="submit"
          onClick={handeSaveDataProfile}
        >
          <p className="profile__but-title">Сохранить текущие данные</p>
        </button>
        <p className="profile__status">{statusFetch}</p>
      </section>

      <h2 className="profile__title">Слайдер последних постов</h2>

      <a
        className="profile__link"
        href={`${routerConfig.allposts.href}${nameProfile}`}
        onClick={handelLinkAllPosts}
      >
        Перейти на страницу всех постов
      </a>

      <SliderPost avatarProfile={avatarProfile} />
      <h2 className="profile__title">
        {' '}
        Форма для создания нового поста
      </h2>
      <CreatePost />
      <PopupAva
        isOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        setAvatarProfile={setAvatarProfile}
      />
    </section>
  )
}
