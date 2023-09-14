

export const appReducer = (state, action) => {
    switch (action.type){
        case 'SET_LOADING_TRUE':
            return {...state, loading: true};
        case 'SET_LOADING_FALSE':
            return {...state, loading: false};
        case 'GET_DENTISTS': 
            return {...state, dentists: action.payload};
        case 'GET_DENTIST':
            return {...state, dentist: action.payload};
        case 'ADD_DENTIST_FAV':
            return {...state, dentistsFavs: [...state.dentistsFavs, action.payload]};
        case 'DELETE_DENTIST_FAV':
            return {...state, dentistsFavs: state.dentistsFavs.filter(fav => fav.id != action.payload.id)};
        case 'CHANGE_THEME':
            return {...state, theme: action.payload};
        default:
            return state
    }
}
