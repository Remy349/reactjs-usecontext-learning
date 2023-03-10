import React from 'react'
import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/User/UserState'

function App () {
  return (
    <UserState>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-8'>
            <UserList />
          </div>
          <div className='col-md-4'>
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App
