import * as types from '../actions/types'
// import { combineReducers } from 'redux';

const initialState = {
    currentUser: ''
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case types.SET_CURRENT_USER:
            return({
                ...state,
                currentUser: action.payload
            })
        default: 
            return state;
    }
}

export default reducer