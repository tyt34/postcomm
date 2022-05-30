import './Nav.scss'
import { useNavigate} from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()

  function handelLinkAllUsers(e) {
    e.preventDefault()
    navigate('/allusers')
  }

  function handelLinkExit(e) {
    e.preventDefault()
    navigate('/exit')
  }

  return (
    <section className="nav">
      <h2 className="nav__title">
        Навигация по сайту
      </h2>
      <section className="nav__footer">
        <a className="nav__link" href={"#/allusers"} onClick={handelLinkAllUsers}>
          Все пользователи
        </a>
        <a className="nav__link" href={"#/exit"} onClick={handelLinkExit}>
          Выход
        </a>
      </section>
    </section>
  )
}

export default Nav
