import * as types from './types'
import axios from 'axios'

export const setUser = () => dispatch => {
    
    axios.get('https://randomuser.me/api/')
    .then(res => {
        console.log(res.data.results[0])
        dispatch({
                type: types.SET_CURRENT_USER,
                payload: res.data.results[0]
            })
    })
    .catch(err => console.error(err))

}