import React from 'react'
import {Link} from 'react-router-dom'

class Start extends React.Component {
    render() {
        console.log(this.props)
        return(
            <>
            {this.props.currentUser ? 
                <h2>Your quest starts now {this.props.currentUser.name.first}!</h2>
                :
                <Link to="/create">create character</Link>
            }
            </>
        )
    }
}

export default Start;