import './AllPosts.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import * as api from '../../utils/api.js'
import PrewPost from '../PrewPost/PrewPost'
import def_ava from "../../images/def_avatar.png"
//import { useDispatch, useSelector } from 'react-redux'

function AllPosts() {
  let { nameUser } = useParams();
  //console.log(' nameUser: ', nameUser)
  const [messageForProfile, setMessageForProfile] = useState('')
  const [avatarProfile, setAvatarProfile] = useState(def_ava)
  const [surnameProfile, setSurnameProfile] = useState('')
  const [emailProfile, setEmailProfile] = useState('')
  const [phoneProfile, setPhoneProfile] = useState('')
  const [companyProfile, setCompanyProfile] = useState('')
  const [jobpostProfile, setJobpostProfile] = useState('')
  //const ownerID = useSelector( store => store.idUser)

  useEffect(() => {
    api.getMesUser(nameUser)
    .then(
      (arg) => {
        if (arg.status) {
          if (arg.status === 'ok') {
            //console.log(arg)
            setMessageForProfile(arg.data)
          }
        }
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })
  }, [])

  useEffect(() => {
    if (messageForProfile[0]) {
      api.getAvaForPrevPost(messageForProfile[0].owner)
      .then(
        (arg) => {
          console.log(arg)
          setAvatarProfile(arg.avatar)
          setSurnameProfile(arg.surname)
          setEmailProfile(arg.email)
          setPhoneProfile(arg.phone)
          setCompanyProfile(arg.company)
          setJobpostProfile(arg.jobpost)
        }
      )
      .catch( (err) => {
        console.log('Err#2 ',err)
      })
    }
  }, [messageForProfile])

  return (
    <section className="all">
      <section className="all__profile">
        <h2 className="all__text-profile">
          Информация о пользователе:
        </h2>
        <h2 className="all__text-profile">
          Пользователь: {nameUser}
        </h2>
        <h2 className="all__text-profile">
          Псевданим: {surnameProfile}
        </h2>
        <h2 className="all__text-profile">
          Email: {emailProfile}
        </h2>
        <h2 className="all__text-profile">
          Номер: {phoneProfile}
        </h2>
        <h2 className="all__text-profile">
          Компания: {companyProfile}
        </h2>
        <h2 className="all__text-profile">
          Должность: {jobpostProfile}
        </h2>
      </section>

      <h2 className="all__title">
        Все посты в виде превью
      </h2>
      <section className="all__posts">
        {
          messageForProfile.length > 0 ?
            messageForProfile.map( (post) =>
              (
                <PrewPost
                  key={post._id}
                  info={post}
                  avatarProfile={avatarProfile}
                />
              )
            )
            :
            <>
            </>
        }
      </section>
    </section>
  )
}

export default AllPosts
