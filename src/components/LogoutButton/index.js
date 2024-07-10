// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    console.log(history)
    history.replace('/login')
  }
  return <button onClick={onLogOut}>Logout</button>
}

export default withRouter(LogoutButton)
