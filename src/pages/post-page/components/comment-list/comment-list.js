import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OneComment } from '../one-comment/one-comment.js'
import { getComments } from '../../../../utils/index.js'
import './styles.scss'

export const CommentsList = ({ idPost }) => {
  const infoAboutNewComment = useSelector(
    (store) => store.infoAboutNewComment
  )
  const [arrayComments, setArrayComments] = useState([])

  useEffect(() => {
    getComments(idPost)
      .then((comments) => {
        setArrayComments(comments.data)
      })
      .catch((err) => {
        console.log('Err#5 ', err)
      })
  }, [infoAboutNewComment])

  return (
    <section className="comments">
      {arrayComments.length === 0 ? (
        <p className="comments__text">
          Комментариев у данного поста нет
        </p>
      ) : (
        <>
          {arrayComments.map((comment) => (
            <OneComment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </section>
  )
}
