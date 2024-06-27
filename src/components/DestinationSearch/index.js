// Write your code here

import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const serchDestination = destinationsList.filter(eachdestination =>
      eachdestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="search-container">
        <h1 className="search-heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="serch-icon"
          />
        </div>
        <ul className="search-input-list">
          {serchDestination.map(destination => (
            <DestinationItem
              destinationItem={destination}
              key={destination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
