import * as marketAction from "./marketAction"

const initialState = {
    coins: [],
    error: null,
    loading: false
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case marketAction.GET_COIN_MARKET_BEGIN:
            return {
                ...state,
                loading: true
            }
        case marketAction.GET_COIN_MARKET_SUCCESS:
            return {
                ...state,
                coins: action.payload.coins
            }
        case marketAction.GET_COIN_MARKET_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default marketReducer;