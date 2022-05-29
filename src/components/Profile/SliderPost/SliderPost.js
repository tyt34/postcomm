import './SliderPost.scss'
import React, { useEffect, useState } from 'react'
import disableScroll from 'disable-scroll';

function SliderPost() {
  const [imgLeft, setImgLeft] = useState(0)
  const [imgMid, setImgMid] = useState(1)
  const [imgRig, setImgRig] = useState(2)

  const [items, setItems] = useState([

  ])

  function nextNum(num) {
    let newNum = num + 1
    if (newNum > items.length-1) {
      return 0
    } else {
      return newNum
    }
  }

  function prevNum(num) {
    let newNum = num - 1
    if (newNum === -1) {
      return items.length-1
    } else {
      return newNum
    }
  }

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setImgLeft(prevNum(imgLeft))
      setImgMid(prevNum(imgMid))
      setImgRig(prevNum(imgRig))
    } else {
      setImgLeft(nextNum(imgLeft))
      setImgMid(nextNum(imgMid))
      setImgRig(nextNum(imgRig))
    }
  }

  return (
    <section
      className="carusel"
      tabIndex="0"
      onWheel={handleWheel}
      onMouseEnter={(e) => {disableScroll.on()}} // чтобы страница не прокручивалась при наведение на компонент карусель
      onMouseLeave={(e) => {disableScroll.off()}} // чтобы страница не прокручивалась при наведение на компонент карусель
    >

    </section>
  )
}

export default SliderPost
