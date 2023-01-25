import React from 'react'
import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/User/UserState'

function App () {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  )
}

export default App
