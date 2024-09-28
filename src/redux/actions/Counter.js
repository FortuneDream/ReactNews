import actionTypes from "../actions/actionTypes"


// 递增
export const increment = (value) => {
    return {
        type : actionTypes.COUNTER_INCREMENT,
        payload : value
    }
}

export const decrement = (value) => {
    return {
        type : actionTypes.COUNTER_DECREMENT,
        payload : value
    }
}