import React, { useReducer } from 'react'
import UserReducer from './UserReducer'

const UserState = () => {
  const initialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = () => {}

  const getProfile = () => {}
}

export default UserState
