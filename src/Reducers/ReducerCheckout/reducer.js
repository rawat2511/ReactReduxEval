import { ADD_ITEM } from "./action";

export const reducer = (state, action) => {
    switch( action.type ){
        case ADD_ITEM: {
            return [...state, ...action.payload];
        }
    }
}