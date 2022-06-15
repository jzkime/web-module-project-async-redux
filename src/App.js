import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { setUser } from './actions/actions'
import './App.css';
import Title from './components/Title'
import User from './components/User'

function App(props) {

  useEffect(() => {
    props.setUser()
  }, [])

  return (
      <div className="App">
        <Title />
        <p>can you spot the discrepancies </p>
        {props.currentUser && <User currentUser={props.currentUser}/>}
      </div>
  );
}

export default connect(st => st, { setUser })(App);