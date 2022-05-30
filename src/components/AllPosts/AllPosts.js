import './AllPosts.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import * as api from '../../utils/api.js'
import PrewPost from '../PrewPost/PrewPost'
import def_ava from "../../images/def_avatar.png"
import { useDispatch, useSelector } from 'react-redux'

function AllPosts() {
  let { nameUser } = useParams();
  console.log(' nameUser: ', nameUser)
  const [messageForProfile, setMessageForProfile] = useState('')
  const [avatarProfile, setAvatarProfile] = useState(def_ava)
  const ownerID = useSelector( store => store.idUser)

  useEffect(() => {
    //console.log(' user: ', nameUser)

    api.getMesUser(nameUser)
    .then(
      (arg) => {
        //console.log(arg)
        if (arg.status) {
          if (arg.status === 'ok') {
            setMessageForProfile(arg.data)
          }
        }
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })

    /*
    api.getAvaForPrevPost(messageForProfile[0].avatar)
    .then(
      (arg) => {
        console.log(' получаю аватар ', arg)
        setAvatarProfile(arg.avatar)
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })
    */
    //console.log(ownerID)
    /*
    if (ownerID) { // если перешли по ссылке
      api.getAvaForPrevPost(ownerID)
      .then(
        (arg) => {
          console.log(' получаю аватар ', arg)
          setAvatarProfile(arg.avatar)
        }
      )
      .catch( (err) => {
        console.log('Err#1 ',err)
      })
    }
    */
  }, [])

  useEffect(() => {
    if (messageForProfile[0]) {
      //console.log(messageForProfile[0])
      //console.log(messageForProfile[0].owner)
      api.getAvaForPrevPost(messageForProfile[0].owner)
      .then(
        (arg) => {
          console.log(' получаю аватар ', arg)
          setAvatarProfile(arg.avatar)
        }
      )
      .catch( (err) => {
        console.log('Err#1 ',err)
      })
    }
    /*
    api.getAvaForPrevPost(messageForProfile[0].avatar)
    .then(
      (arg) => {
        console.log(' получаю аватар ', arg)
        setAvatarProfile(arg.avatar)
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })
    */
    /*
    if (messageForProfile[0]) { // если нажали обновить страницу на этой ссылке
      console.log(messageForProfile)
      console.log(messageForProfile[0].owner)
      api.getAvaForPrevPost(messageForProfile[0].owner)
      .then(
        (arg) => {
          console.log(arg)
          setAvatarProfile(arg.avatar)
        }
      )
      .catch( (err) => {
        console.log('Err#1 ',err)
      })
    }
    */
  }, [messageForProfile])

  return (
    <section className="all">
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
