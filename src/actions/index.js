import types from './types';
import axios from 'axios';

export const getMovieQuote = () => async dispatch => {

    const axiosConfig = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    };

    const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);

    dispatch({
        type: types.GET_QUOTE,
        quote: resp.data.message
    });
}

export function userSignIn(user){
    // console.log('User Sign In Called');
    return async function (dispatch){
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signin',user);

            console.log('Sign In Response:', resp);

            localStorage.setItem('token',resp.data.token);

            dispatch({
                type:types.SIGN_IN
            });
        } catch (err){
            dispatch({
                type: types.SIGN_IN_ERROR,
                error: 'Invalid email and/or password'
            });
        }
    }
}

export function userSignOut(){
    localStorage.removeItem('token');

    return{
        type:types.SIGN_OUT
    }
}

export function userSignUp(user){
    return async function(dispatch){
        try{
            const resp =await axios.post('http://api.reactprototypes.com/signup', user);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type:types.SIGN_UP
            });
        } catch(err){
            dispatch({
                type:types.SIGN_UP_ERROR,
                error:'Email already in use'
            });
        }
    }
}