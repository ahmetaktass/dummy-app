import React, { Component } from 'react'

import Login from './Login'
import SingUp from './SingUp'

export default class UserModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      userName: 'ahmetaktas',
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="d-flex text-danger ml-5">
          <span>Welcome {this.state.userName}</span>
        </div>
      )
    }

    return (
      <div>
        <div className=" m-2 ">
          <Login /> <SingUp />
        </div>
      </div>
    )
  }
}
