import * as types from '../actions/types'

const initialState = {
    currentUser: '',
    haveUser: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case types.SET_CURRENT_USER:
            return({
                ...state,
                currentUser: action.payload,
                haveUser: true
            });
        case types.CHANGE_SECTION:
            return({
                ...state,
                currentUser: {...state.currentUser, ...action.payload }
            });
        case types.SWITCH_GEN:
            return({
                ...state,
                currentUser: {...state.currentUser, ...action.payload}
            })
        default: 
            return state;
    }
}

export default reducer