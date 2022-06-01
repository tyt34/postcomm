import './Footer.scss'

function Footer({ textIntro, handleLink, textEnter }) {
  return (
    <p className="footer__intro">
      {textIntro}{'\u00A0'}
      <a
        href="/signin"
        className="footer__link"
        onClick={handleLink}
      >
        {textEnter}
      </a>
    </p>
  )
}

export default Footer
