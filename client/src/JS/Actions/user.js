import axios from 'axios'


// register

import {
    CURRENT_USER,
    LOGOUT,
    USER_FAIL, USER_LOAD, USER_SUCC
} from "../ActionsType/user"

export const register = (newUser, history) => async (dispatch) => {

    dispatch({ type: USER_LOAD })

    try {

        let result = await axios.post('api/user/register', newUser) //http://localhost:6000/api/user/register

        dispatch({ type: USER_SUCC, payload: result.data }) // msg,user,token
        // yimchi lil profil we9t success
        history.push('/profile')

    } catch (error) {
        // affichier error fi formulaire
        //const errors = error.response.data.errors
        //errors.map(error => alert(error.msg))

        dispatch({ type: USER_FAIL, payload: error.response.data }) // errors: []


    }


}

// login

export const login = (user, history) => async (dispatch) => {

    dispatch({ type: USER_LOAD })

    try {

        let result = await axios.post('api/user/login', user) //http://localhost:6000/api/user/login

        dispatch({ type: USER_SUCC, payload: result.data }) // msg,user,token
        // yimchi lil profil we9t success
        history.push('/profile')



    } catch (error) {

        dispatch({ type: USER_FAIL, payload: error.response.data }) // errors: []

    }
}

//logout

export const logout = () => {

    return {
        type: LOGOUT
    }

}

// current current user

//async (dispatch) khather ya7ki m3a bd

export const currentUser = () => async (dispatch) => {
    dispatch({ type: USER_LOAD })

    try {

        const config = {

            // profile mil postman 

            //header mil POSTMAN

            headers: {
                authorization: localStorage.getItem("token")
            }
        }

        let result = await axios.get('/api/user/current', config)
        dispatch({ type: CURRENT_USER, payload: result.data }) // {name ....}

    } catch (error) {

        dispatch({ type: USER_FAIL, payload: error.response.data }) // errors: []

    }



}