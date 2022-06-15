import React from 'react';
import { connect } from 'react-redux'
import { setUser, changePart, switchGender } from './actions/actions'
import './App.css';
import Title from './components/Title'
import User from './components/User'
import { Route, Link, Switch } from 'react-router-dom'
import Start from './components/Start';

function App(props) {

  const handlePart = (part) => {
    props.changePart(part)
  }

  const sw = (gen) => {
    props.switchGender(gen)
  }

  return (
      <div className="App">
        <Title />

        <Switch>
          <Route path='/create'>
            <User setUser={props.setUser} currentUser={props.currentUser} handlePart={handlePart} sw={sw}/>
          </Route>
          <Route path="/questStart">
            <Start currentUser={props.currentUser}/>
          </Route>
          <Route exact path='/'> 
            <Link to="/create" className='user-button'>create your character</Link>
          </Route>
        </Switch>
      </div>
  );
}

export default connect(st => st, { setUser, changePart, switchGender })(App);