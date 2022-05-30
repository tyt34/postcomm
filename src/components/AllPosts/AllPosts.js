import './AllPosts.scss'
import React, { useEffect, useState } from 'react'
import * as api from '../../utils/api.js'
import PrewPost from '../PrewPost/PrewPost'
import { useDispatch, useSelector } from 'react-redux'

function AllPosts() {
  const [messageForProfile, setMessageForProfile] = useState('')
  const [avatarProfile, setAvatarProfile] = useState('')
  const ownerID = useSelector( store => store.idUser)

  //console.log(messageForProfile)

  useEffect(() => {
    api.getMesForProfile()
    .then(
      (arg) => {
        //console.log(arg)
        if (arg.status) {
          if (arg.status === 'ok') {
            //console.log(arg.data[0])
            setMessageForProfile(arg.data)
            //setMessageForProfile([arg.data[0]])
            //setMessageForProfile([arg.data[0],arg.data[1]])
            //setMessageForProfile([arg.data[0],arg.data[1],arg.data[1]])
          }
        }
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })

    api.getAvaForPrevPost(ownerID)
    .then(
      (arg) => {
        //console.log(arg)
        setAvatarProfile(arg.avatar)
      }
    )
    .catch( (err) => {
      console.log('Err#1 ',err)
    })
  }, [])

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
