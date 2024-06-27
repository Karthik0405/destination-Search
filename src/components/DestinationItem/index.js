// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="destination-li">
      <img src={imgUrl} alt={name} className="destination-item-image" />
      <p className="destination-item-para">{name}</p>
    </li>
  )
}

export default DestinationItem
