import './Comment.scss'
import def_ava from "../../../../images/def_avatar.png"
import React, { useEffect, useState } from 'react'
import * as api from '../../../../utils/api.js'

function Comment({comment}) {
  //console.log('comment', comment)
  const [timeDay, setTimeDay] = useState(null)
  const [timeClock, setTimeClock] = useState(null)
  const [name, setName] = useState(null)
  const [surname, setSurname] = useState(null)
  const [avatar, setAvatar] = useState(def_ava)

  useEffect(() => {
    const d = comment.dateText.split(' ')
    //console.log(d)
    setTimeDay(d[2]+'/'+d[1][0]+'/'+d[3][2]+d[3][3])
    setTimeClock(d[4].split(':')[0]+'-'+d[4].split(':')[1])

    api.getAvaForPrevPost(comment.owner)
    .then(
      (arg) => {
        //console.log(' получаю аватар ', arg)
        setName(arg.name)
        setSurname(arg.surname)
        //console.log(arg.avatar)
        if (arg.avatar === 'default') {
          setAvatar(def_ava)
        } else {
          setAvatar(arg.avatar)
        }
      }
    )
    .catch( (err) => {
      console.log('Err#4 ',err)
    })
  }, [comment])

  return (
    <section
      className="prew prew-comment"
    >
      <section className="prew__top">
        <img className="prew__ava" src={avatar}/>
        <p className="prew__user">
          {name} - {surname}
        </p>
      </section>

      <section className="prew__bot">
        <section className="prew__time">
          <p className="prew__day">
            {timeDay}
          </p>
          <p className="prew__clock">
            {timeClock}
          </p>
        </section>

        <p className="prew__full-text">
          {comment.comment}
        </p>
      </section>
    </section>
  )
}

export default Comment
