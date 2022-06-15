import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { setUser, changePart, switchGender } from './actions/actions'
import './App.css';
import Title from './components/Title'
import User from './components/User'

function App(props) {

  const handleRandom = () => {
    props.setUser()
  }

  const handlePart = (part) => {
    props.changePart(part)
  }

  const sw = (gen) => {
    props.switchGender(gen)
  }

  return (
      <div className="App">
        <Title />
        {!props.haveUser && <button onClick={handleRandom}>create your character</button>}
        {props.currentUser && <User currentUser={props.currentUser} handlePart={handlePart} sw={sw}/>}
      </div>
  );
}

export default connect(st => st, { setUser, changePart, switchGender })(App);