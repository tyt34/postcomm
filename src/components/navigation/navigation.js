import { useNavigate } from 'react-router-dom'
import { routerConfig } from '../../constants/router'
import './style.scss'

export const Navigation = () => {
  const navigate = useNavigate()

  const handelLinkAllUsers = (e) => {
    e.preventDefault()
    navigate(routerConfig.allusers.url)
  }

  const handelLinkExit = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate(routerConfig.log.url)
  }

  const handelLinkProfile = (e) => {
    e.preventDefault()
    navigate(routerConfig.profile.url)
  }

  return (
    <section className="nav">
      <h2 className="nav__title">Навигация по сайту</h2>
      <section className="nav__footer">
        <a
          className="nav__link"
          href={routerConfig.allusers.href}
          onClick={handelLinkAllUsers}
        >
          Все пользователи
        </a>
        <a
          className="nav__link"
          href={routerConfig.profile.href}
          onClick={handelLinkProfile}
        >
          Профиль
        </a>
        <a
          className="nav__link"
          href={routerConfig.log.href}
          onClick={handelLinkExit}
        >
          Выход
        </a>
      </section>
    </section>
  )
}
