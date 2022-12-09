import { ADD_CHARACTER, DELETE_CHARACTER } from "./actions"

const initialState = {
    myFavorites: [],
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char=> {
                    return char.id !== action.payload
                })
            }
        default:
            return {...state}
    }
}

export default reducer