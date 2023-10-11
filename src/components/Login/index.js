import {Component} from 'react'

import './index.css'

class login extends Component {
  state = {text: 'Please Login'}

  increaseButton = () => {
    this.setState({text: 'Welcome User'})
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <h1>{text}</h1>
        <button type="button" onClick={this.increaseButton}>
          Login
        </button>
      </div>
    )
  }
}

export default login
