import { ADD_DEPARTMENT, GET_DEPARTMENTS } from "../action-types";

const initialState = {
    departments: []
}


export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_DEPARTMENTS:
            return { ...state, departments: action.departments }
        case ADD_DEPARTMENT:
            return { ...state }
        default:
            return state;
    }
};