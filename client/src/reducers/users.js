import * as actionType from '../constants/actionTypes';

export default (state = { users: [] }, action) => {
    switch (action.type) {
        case actionType.FETCH_USER:
            return {...state, user : action.payload}
        default:
            return state;
    }

}

