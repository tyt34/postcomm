import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import def_ava from '../../images/def_avatar.png'
import { getTimeClock, getTimeDay } from '../../utils'
import { routerConfig } from '../../constants'
import './style.scss'

export const PrewPost = ({ info, avatarProfile }) => {
  const navigate = useNavigate()
  const { header, text, dateText } = info
  const [avatar, setAvatar] = useState(def_ava)
  const [timeDay, setTimeDay] = useState(null)
  const [timeClock, setTimeClock] = useState(null)

  useEffect(() => {
    const d = dateText.split(' ')
    setTimeDay(getTimeDay(d))
    setTimeClock(getTimeClock(d))
  }, [info, dateText])

  useEffect(() => {
    if (avatarProfile !== 'default') {
      setAvatar(avatarProfile)
    }
  }, [avatarProfile])

  const handleLinkPost = () => {
    navigate(`${routerConfig.post.url}${info._id}`)
  }

  return (
    <section className="prew prew-link" onClick={handleLinkPost}>
      <section className="prew__top">
        <img className="prew__ava" src={avatar} alt="user avatar" />
        <p className="prew__head">{header}</p>
      </section>

      <section className="prew__bot">
        <section className="prew__time">
          <p className="prew__time">{timeDay}</p>
          <p className="prew__time">{timeClock}</p>
        </section>

        <p className="prew__text">{text}</p>
      </section>
    </section>
  )
}
