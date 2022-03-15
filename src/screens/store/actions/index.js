import { api } from "../../../services"
import { ADD_DEPARTMENT, GET_DEPARTMENTS } from "../action-types"



export const getAllDepartments = () => async dispatch => {
    api.get( '/api/merchandising/buyerDepartments' )
        .then( response => {
            dispatch( {
                type: GET_DEPARTMENTS,
                departments: response.data.data
            } )
        } )
}

export const addBuyerDepartment = ( department, navigation, setDepartment ) => async dispatch => {
    api.post( '/api/merchandising/buyerDepartments', department )
        .then( response => {
            dispatch( {
                type: ADD_DEPARTMENT
            } );
            dispatch( getAllDepartments() );
            navigation.navigate( 'List' );
            setDepartment( {
                name: '',
                description: ''
            } )
        } )
}