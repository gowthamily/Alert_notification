// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="container">
      <div className="notify">{children} </div>
      <GrFormClose className="gr-close" />
    </div>
  )
}

export default Notification
