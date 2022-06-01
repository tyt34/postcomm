import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import def_ava from "../../images/def_avatar.png"
import { getTimeDay, getTimeClock } from '../../utils/consts.js'
import './PrewPost.scss'

function PrewPost({ info, avatarProfile }) {
  const navigate = useNavigate()
  const {header, text, dateText} = info
  const [avatar, setAvatar] = useState(def_ava)
  const [timeDay, setTimeDay] = useState(null)
  const [timeClock, setTimeClock] = useState(null)

  useEffect(() => {
    const d = dateText.split(' ')
    setTimeDay(getTimeDay(d))
    setTimeClock(getTimeClock(d))
  }, [info])

  useEffect(() => {
    if (avatarProfile !== 'default') {
      setAvatar(avatarProfile)
    }
  },[avatarProfile])

  function handleLinkPost() {
    navigate('/post/'+info._id)
  }

  return (
    <>
      <section
        className="prew prew-link"
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
            <p className="prew__time">
              {timeDay}
            </p>
            <p className="prew__time">
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
