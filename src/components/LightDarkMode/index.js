// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isChecked: false}

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {isChecked} = this.state
    const textChange = isChecked ? 'Light Mode' : 'Dark Mode'
    const themeClass = isChecked ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`container ${themeClass}`}>
          <h1 className="heading">click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onChecked}>
            {textChange}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
