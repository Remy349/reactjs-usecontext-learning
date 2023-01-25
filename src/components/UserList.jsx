import React, { useContext, useEffect } from 'react'
import UserContext from '../context/User/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='list-group h-100'>
      {users.map((user) => (
        <a
          className='d-flex flex-row justify-content-start
          align-items-center list-group-item list-group-item-action'
          key={user.id}
          href='#!'
          onClick={() => getProfile(user.id)}
        >
          <img
            src={user.avatar}
            className='img-fluid mr-4 rounded-circle'
            alt='Profile image'
            width='70'
          />
          <p>
            {user.first_name} {user.last_name}
          </p>
        </a>
      ))}
    </div>
  )
}

export default UserList
