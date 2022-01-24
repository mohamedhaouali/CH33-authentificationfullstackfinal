
import { CURRENT_USER, LOGOUT, USER_FAIL, USER_LOAD, USER_SUCC } from "../ActionsType/user";

const initState = {

    //load du base du donnees
    load: false,
    //
    user: {},
    errors: [],
    isAuth: false

}

const userReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case USER_LOAD: return { ...state, load: true }
        case USER_SUCC:
            localStorage.setItem("token", payload.token)
            return { ...state, load: false, user: payload.user, isAuth: true }
        case USER_FAIL: return { ...state, load: false, errors: payload.errors, isAuth: false }

        case LOGOUT:
            //remove token
            localStorage.removeItem("token")

            return {
                ...state,
                load: false,
                user: {},
                errors: [],
                isAuth: false
            }


        case CURRENT_USER: return { ...state, load: false, user: payload.user, isAuth: true }


        default: return state

    }


}

export default userReducer