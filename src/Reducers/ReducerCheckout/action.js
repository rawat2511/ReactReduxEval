
export const ADD_ITEM = "ADD_ITEM";

const action = (data) => {
    return {
        type: ADD_ITEM,
        payload: data
    }
}

export default action;