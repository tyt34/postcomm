import './CommentsList.scss'
import Comment from './Comment/Comment'
import * as api from '../../../utils/api.js'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CommentsList({idPost}) {
  const infoAboutNewComment = useSelector( store => store.infoAboutNewComment)
  const [arrayComments, setArrayComments] = useState([])

  //console.log(infoAboutNewComment)

  useEffect( () => {
    api.getComments(idPost)
    .then(
      (arg) => {
        //console.log(' comments: ', arg.data)
        setArrayComments(arg.data)
      }
    )
    .catch( (err) => {
      console.log('Err#5 ',err)
    })
  }, [infoAboutNewComment])


  return (
    <section className="comments">
      {
        arrayComments.length === 0 ?
          <p className="comments__text">
            Комментариев у данного поста нет
          </p>
          :
          <>
           {
             arrayComments.map( (comment) =>
               (
                 <Comment
                  key={comment._id}
                  comment={comment}
                 />
               )
             )
           }
          </>
      }
    </section>
  )
}

export default CommentsList
