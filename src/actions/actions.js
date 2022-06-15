import * as types from './types'
import axios from 'axios'

const URL = 'https://randomuser.me/api/'

export const setUser = () => dispatch => {
    axios.get(URL)
    .then(res => {
        dispatch({
                type: types.SET_CURRENT_USER,
                payload: res.data.results[0]
            })
    })
    .catch(err => console.error(err))
}

export const changePart = (sec) => dispatch => {
    axios.get(URL)
    .then(res => {
        dispatch({type: types.CHANGE_SECTION, payload: {[sec]: res.data.results[0][sec] }})
    })
}

export const switchGender = (gen) => dispatch => {
    axios.get(URL)
    .then(res => {
        dispatch({type: types.SWITCH_GEN, payload: {"gender": gen}})
    })
}