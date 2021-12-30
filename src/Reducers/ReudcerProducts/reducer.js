import { actionTypes } from "./actions";

function reducer(state, action) {
    
    switch( action.type ){
        case actionTypes.FETCH_DATA: {
            console.log(action.payload );
            return [ ...state, ...action.payload];
        }
        default:
            return state;

    }
    
}

export default reducer;