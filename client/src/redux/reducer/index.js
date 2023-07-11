import {GET_USERS} from "../actions"

let initialState = {allUsers:[], usersCopy:[], posts:[]} // estos son los estados globales, uno de ellos es de repuesto.

function rootReducer(state = initialState, action) { 
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                allUsers: action.payload,
                usersCopy:action.payload
            }
        default:
            return state
    }
}

export default rootReducer
