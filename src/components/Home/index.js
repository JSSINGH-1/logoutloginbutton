import {Component} from 'react'
import Login from '../Login/index'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="card-one">
          <div className="card-two">
            <Login />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
