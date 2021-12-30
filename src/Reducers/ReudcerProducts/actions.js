

export const actionTypes = {
    FETCH_DATA: "FETCH_DATA"
}

export const fetchData = (products) => {
    return {
        type: actionTypes.FETCH_DATA,
        payload: products
    }
}