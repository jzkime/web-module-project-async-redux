import React from 'react'

class User extends React.Component {
    render() {
        const { currentUser } = this.props
        const cU = currentUser
        return(
            <section className='user-container'>
                <img src={cU.picture.large}/>
                <h3>{cU.name.first} {cU.name.last}</h3>
                <p>username: {cU.login.username}</p>
                <p>gender: {cU.gender}</p>
                <p>age: {cU.dob.age}</p>
                <p>registeration <br/> age: {cU.registered.age}</p>
            </section>
        )
    }
}

export default User;
