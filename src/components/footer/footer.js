import './style.scss'

export const Footer = ({ textIntro, handleLink, textEnter, href }) => {
  return (
    <p className="footer__intro">
      {textIntro}
      {'\u00A0'}
      <a
        href={href}
        className="footer__link"
        onClick={handleLink}
      >
        {textEnter}
      </a>
    </p>
  )
}
