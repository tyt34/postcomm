import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../utils/api.js'
import PrewUser from './PrewUser/PrewUser'
import './AllUsers.scss'

function AllUsers() {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    getAllUsers()
    .then(
      (users) => {
        if (users.status) {
          setAllUsers(users.users)
        }
      }
    )
    .catch( (err) => {
      console.log('Err#3 ', err)
    })
  }, [])

  return (
    <section className="all">
      <h2 className="all__title">
        Все пользователи этой социальной сети:
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
