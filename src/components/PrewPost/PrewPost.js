import './PrewPost.scss'
import def_ava from "../../images/def_avatar.png"
import React, { useEffect, useState } from 'react'
import * as api from '../../utils/api.js'

function PrewPost({info, avatarProfile}) {
  const {header, text, dateText} = info
  const [avatar, setAvatar] = useState(def_ava)
  const [timeDay, setTimeDay] = useState(null)
  const [timeClock, setTimeClock] = useState(null)

  //console.log(avatarProfile)

  useEffect(() => {
    const d = dateText.split(' ')
    //console.log(d)
    setTimeDay(d[2]+'/'+d[1][0]+'/'+d[3][2]+d[3][3])
    setTimeClock(d[4].split(':')[0]+'-'+d[4].split(':')[1])
  }, [info])

  useEffect(() => {
    if (avatarProfile !== 'default') {
      setAvatar(avatarProfile)
    }
  },[avatarProfile])

  function handleLinkPost() {
    console.log(' open post ', info._id)
  }

  return (
    <>
      <section
        className="prew"
        onClick={handleLinkPost}
      >
        <section className="prew__top">
          <img className="prew__ava" src={avatar}/>
          <p className="prew__head">
            {header}
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

          <p className="prew__text">
            {text}
          </p>
        </section>
      </section>
    </>
  )
}

export default PrewPost
