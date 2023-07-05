import styles from './footer.module.scss'

export const Footer = ({ textIntro, handleLink, textEnter, href }) => {
  return (
    <p className={styles.intro}>
      {textIntro}
      {'\u00A0'}
      <a
        href={href}
        className={styles.link}
        onClick={handleLink}
      >
        {textEnter}
      </a>
    </p>
  )
}
