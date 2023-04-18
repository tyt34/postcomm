import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMesUser, getAvaForPrevPost } from '../../../../utils/api'
import def_ava from '../../../../images/def_avatar.png'
import './style.scss'
import { PrewPost } from '../../../../components/prew-post'

export const AllPosts = () => {
  let { nameUser } = useParams()
  const [messageForProfile, setMessageForProfile] = useState('')
  const [avatarProfile, setAvatarProfile] = useState(def_ava)
  const [surnameProfile, setSurnameProfile] = useState('')
  const [emailProfile, setEmailProfile] = useState('')
  const [phoneProfile, setPhoneProfile] = useState('')
  const [companyProfile, setCompanyProfile] = useState('')
  const [jobpostProfile, setJobpostProfile] = useState('')

  useEffect(() => {
    getMesUser(nameUser)
      .then((data) => {
        if (data.status) {
          if (data.status === 'ok') {
            setMessageForProfile(data.data)
          }
        }
      })
      .catch((err) => {
        console.log('Err#1 ', err)
      })
  }, [])

  useEffect(() => {
    if (messageForProfile[0]) {
      getAvaForPrevPost(messageForProfile[0].owner)
        .then((user) => {
          setAvatarProfile(user.avatar)
          setSurnameProfile(user.surname)
          setEmailProfile(user.email)
          setPhoneProfile(user.phone)
          setCompanyProfile(user.company)
          setJobpostProfile(user.jobpost)
        })
        .catch((err) => {
          console.log('Err#2 ', err)
        })
    }
  }, [messageForProfile])

  return (
    <section className="all">
      <section className="all__profile">
        <h2 className="all__text-profile all__text-profile-bold">
          Информация о пользователе:
        </h2>
        <h2 className="all__text-profile">Пользователь: {nameUser}</h2>
        <h2 className="all__text-profile">
          Псевданим: {surnameProfile}
        </h2>
        <h2 className="all__text-profile">Email: {emailProfile}</h2>
        <h2 className="all__text-profile">Номер: {phoneProfile}</h2>
        <h2 className="all__text-profile">
          Компания: {companyProfile}
        </h2>
        <h2 className="all__text-profile">
          Должность: {jobpostProfile}
        </h2>
      </section>

      <h2 className="all__title">Все посты в виде превью</h2>
      <section className="all__posts">
        {messageForProfile.length > 0 ? (
          messageForProfile.map((post) => (
            <PrewPost
              key={post._id}
              info={post}
              avatarProfile={avatarProfile}
            />
          ))
        ) : (
          <></>
        )}
      </section>
    </section>
  )
}
