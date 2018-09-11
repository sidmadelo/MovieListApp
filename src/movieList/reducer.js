import { 
	TOGGLE_MODAL,
	FORM_SUBMIT,
	VIEW_MOVIE,
	DELETE_MOVIE,
	UPDATE_MOVIE
} from './action';

export const initialState = {
	movies: [
  		{id: 0, title: 'When Harry Met Sally', releaseDate: '1-11-1989', genre: 'Romantic Comedy', price: 9.99, rating: 'R'},
  		{id: 1, title: 'Ghostbusters 2', releaseDate: '2-23-1986', genre: 'Comedy', price: 7.99, rating: 'R'},
  		{id: 2, title: 'Ghostbusters 3', releaseDate: '3-13-1989', genre: 'Comedy', price: 6.99, rating: 'PG'},
	],
	movie: {},
	isModalOpen: false
}

export default (state = initialState, action) => {
	switch (action.type){
		case TOGGLE_MODAL: 
			return {
				...state,
				movie: {},
				isModalOpen: action.payload
			}
		case VIEW_MOVIE: 
			return {
				...state,
				isModalOpen: true,
				movie: { ...action.payload }
			}
		case UPDATE_MOVIE: 
			state.movies[action.payload.id] = {
				...action.payload
			}
			return {
				...state,
				isModalOpen: true
			}
		case DELETE_MOVIE: 
			return {
				...state,
				movies: state.movies.filter(( item ) => item.id !== action.payload)
			}
		case FORM_SUBMIT: 
			return {
				...state,
				movies: [ ...state.movies, { id: state.movies.length , ...action.payload } ]
			}
		default: 
			return state;
	}
}