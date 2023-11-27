import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossChange = () => {
    const getRandomNum = Math.floor(Math.random() * 2)
    // console.log(getRandomNum)

    if (getRandomNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (getRandomNum === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state
    const imageSrc = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="toss-desc">Heads (or) Tails</p>
          <img src={imageSrc} alt="toss result" className="toss-img" />
          <button
            type="button"
            className="toss-btn"
            onClick={this.onTossChange}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="total-count">{`Total: ${totalCount}`}</p>
            <p className="heads-count">{`Heads: ${headsCount}`}</p>
            <p className="tails-count">{`Tails: ${tailsCount}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
