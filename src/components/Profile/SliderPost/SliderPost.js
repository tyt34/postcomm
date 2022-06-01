import React, { useEffect, useState } from 'react'
import disableScroll from 'disable-scroll'
import arrow from "../../../images/arrow.png"
import { useSelector } from 'react-redux'
import PrewPost from '../../PrewPost/PrewPost'
import './SliderPost.scss'

function SliderPost({ avatarProfile }) {
  const storePosts = useSelector( store => store.postForSlider)
  const [mainNum, setMainNum] = useState(0)
  const [maxNum, setMaxNum] = useState(null)
  const [messTop, setMessTop] = useState(null)
  const [messMid, setMessMid] = useState(null)
  const [messBot, setMessBot] = useState(null)
  const [items, setItems] = useState([])

  useEffect( () => {
    setItems(storePosts)
    if (storePosts.length === 1) {
      setMessTop(storePosts[0])
    } else if (storePosts.length === 2) {
      setMessTop(storePosts[0])
      setMessMid(storePosts[1])
    } else if (storePosts.length !== 0) {
      setMessTop(storePosts[mainNum])
      setMessMid(storePosts[mainNum+1])
      setMessBot(storePosts[mainNum+2])
      setMaxNum(storePosts.length)
    }
  }, [storePosts])

  useEffect( ()=> {
    setMessTop(storePosts[mainNum])
    setMessMid(storePosts[mainNum+1])
    setMessBot(storePosts[mainNum+2])
  }, [mainNum, maxNum])

  function prevNum() {
    if (mainNum === 0) {
      setMainNum(maxNum-3)
    } else {
      setMainNum(mainNum-1)
    }
  }

  function nextNum() {
    if (mainNum+3 === maxNum) {
      setMainNum(0)
    } else {
      setMainNum(mainNum+1)
    }
  }

  const handleWheel = (e) => {
    if (storePosts.length > 3) {
      if (e.deltaY > 0) {
        nextNum()
      } else {
        prevNum()
      }
    }
  }

  return (
    <section className="carusel__set"
      tabIndex="0"
      onWheel={handleWheel}
      onMouseEnter={(e) => {disableScroll.on()}} // чтобы страница не прокручивалась при наведение на компонент карусель
      onMouseLeave={(e) => {disableScroll.off()}} // чтобы страница не прокручивалась при наведение на компонент карусель
      onClick={(e) => {disableScroll.off()}} // чтобы при клике на сообщение в слайдере не отключалась колесо мыши
    >
    {
      items.length === 0 ?
      <section className="carusel-small">
        <p className="carusel__text">Постов нет.</p>
      </section>
      :
      items.length === 1 ?
        <>
          <section className="carusel carusel-one">
            <PrewPost
              info={messTop}
              avatarProfile={avatarProfile}
            />
          </section>
        </>
        :
        items.length === 2 ?
        <section className="carusel">
          <PrewPost
            info={messTop}
            avatarProfile={avatarProfile}
          />
          <PrewPost
            info={messMid}
            avatarProfile={avatarProfile}
          />
        </section>
        :
        <section className="carusel">
          <button
            className="carusel__but carusel__but-top"
            onClick={prevNum}
          >
            <img className="carusel__but-img" src={arrow}/>
          </button>
          <PrewPost
            info={messTop}
            avatarProfile={avatarProfile}
          />
          <PrewPost
            info={messMid}
            avatarProfile={avatarProfile}
          />
          <PrewPost
            info={messBot}
            avatarProfile={avatarProfile}
          />
          <button
            className="carusel__but carusel__but-bot"
            onClick={nextNum}
          >
            <img className="carusel__but-img carusel__but-img-bot" src={arrow}/>
          </button>
        </section>
    }
    </section>
  )
}

export default SliderPost
