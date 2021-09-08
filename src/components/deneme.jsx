import React from 'react'
import { useState } from 'react'
import Login from './Login'
import SingUp from './SingUp'

const UserModal = () => {
  const [username, setUsername] = useState('')
  const [usermail, setUsermail] = useState('')

  const userLogin = () => {
    setUsername('ahmetaktas')
    setUsermail('ahmetaktas@gmail.com')
  }

  const singUp = () => {
    alert(' üyee ollll')
  }

  return (
    <div>
      <button className="btn btn-outline-light m-2 " onClick={userLogin}>
        Login
      </button>
      <button className="btn btn-outline-light m-2" onClick={singUp}>
        SingUp
      </button>
      <p>{username}</p>
      <p>{usermail}</p>
    </div>
  )
}

export default UserModal
