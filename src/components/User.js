import React from 'react'
import {Link} from 'react-router-dom'

class User extends React.Component {

    handleChange = (part) => {
        this.props.handlePart(part)
    }

    componentDidMount() {
        if(!this.props.currentUser){
            this.props.setUser()
        }
    }
    
    render() {
        const { currentUser } = this.props
        const cU = currentUser
        return(
            <section className='user'>
                <p>the person you will be playing as is:</p>
                {cU === '' ? <h2>loading...</h2> :
                <div className='user-container'>
                    <img src={cU.picture.large} onClick={()=> this.handleChange('picture')}/>
                    <div className='user-info'>
                        <h3 onClick={() => this.handleChange('name')}>{cU.name.first} {cU.name.last}</h3>
                        <p>username: {cU.login.username}</p>
                        <p onClick={() => this.props.sw(cU.gender === 'male' ? 'female' : 'male')}>gender: {cU.gender}</p>
                        <p>true age: {cU.dob.age}</p>
                        <p>fake age: {cU.registered.age}</p>
                    </div>

                    <div className='user-hometown'>
                        <h4>HOMETOWN</h4>
                        <p>country: {cU.location.country}</p>
                        <p>city: {cU.location.city}</p>
                        <p>state: {cU.location.state}</p>
                    </div>
                </div>
                }
                <h6>*hint: you can change your picture, name, or gender!</h6>
                    <Link to="/questStart">Start your quest!</Link>
            </section>
        )
    }
}

export default User;
