import './AllUsers.scss'
import React, { useEffect, useState } from 'react'
import * as api from '../../utils/api.js'
//import { useDispatch, useSelector } from 'react-redux'
import PrewUser from './PrewUser/PrewUser'

function AllUsers() {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    api.getAllUsers()
    .then(
      (arg) => {
        //console.log(arg)
        if (arg.status) {
          setAllUsers(arg.users)
          //console.log(arg.users[0])
        }
      }
    )
    .catch( (err) => {
      console.log('Err#3 ',err)
    })
  }, [])

  useEffect(() => {
    //console.log(' -> ', allUsers.length)
    //console.log(allUsers.length !== 0 ? 'равно' : 'не равно')
  }, [allUsers])

  return (
    <section className="all">
      <h2 className="all__title">
        Все пользователи этой социальной сети
      </h2>
      <section className="all__users">
        {
          allUsers.length !== 0 ?
            allUsers.map( (user) =>
              (
                <PrewUser
                  key={user._id}
                  user={user}
                />
              )
            )
          :
          <>
          </>
        }
      </section>
    </section>
  )
}

export default AllUsers
