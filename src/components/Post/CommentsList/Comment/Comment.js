import React, { useEffect, useState } from 'react'
import def_ava from "../../../../images/def_avatar.png"
import { getTimeDay, getTimeClock } from '../../../../utils/consts.js'
import { getAvaForPrevPost } from '../../../../utils/api.js'

function Comment({ comment }) {
  const [timeDay, setTimeDay] = useState(null)
  const [timeClock, setTimeClock] = useState(null)
  const [name, setName] = useState(null)
  const [surname, setSurname] = useState(null)
  const [avatar, setAvatar] = useState(def_ava)

  useEffect(() => {
    const d = comment.dateText.split(' ')
    setTimeDay(getTimeDay(d))
    setTimeClock(getTimeClock(d))

    getAvaForPrevPost(comment.owner)
    .then(
      (user) => {
        setName(user.name)
        setSurname(user.surname)
        if (user.avatar === 'default') {
          setAvatar(def_ava)
        } else {
          setAvatar(user.avatar)
        }
      }
    )
    .catch( (err) => {
      console.log('Err#4 ', err)
    })
  }, [comment])

  return (
    <section
      className="prew prew-comment"
    >
      <section className="prew__top">
        <img alt="ava" className="prew__ava" src={avatar}/>
        <p className="prew__user">
          {name} - {surname}
        </p>
      </section>

      <section className="prew__bot">
        <section className="prew__time">
          <p className="prew__time">
            {timeDay}
          </p>
          <p className="prew__time">
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
