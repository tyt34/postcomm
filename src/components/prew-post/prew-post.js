import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import def_ava from '../../images/def_avatar.png'
import { getTimeClock, getTimeDay } from '../../utils'
import { routerConfig } from '../../constants'
import styles from './prew-post.module.scss'

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
    <section
      className={`${styles.main} ${styles.link}`}
      onClick={handleLinkPost}
    >
      <section className={styles.top}>
        <img
          className={styles.ava}
          src={avatar}
          alt="user avatar"
        />
        <p className={styles.head}>{header}</p>
      </section>

      <section className={styles.bot}>
        <section className={styles.time}>
          <p className={styles.time}>{timeDay}</p>
          <p className={styles.time}>{timeClock}</p>
        </section>

        <p className={styles.text}>{text}</p>
      </section>
    </section>
  )
}
