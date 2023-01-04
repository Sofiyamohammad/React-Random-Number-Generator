import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickRandomNumber = () => {
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="display-text">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onClickRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
