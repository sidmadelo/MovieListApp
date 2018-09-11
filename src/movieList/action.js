export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const VIEW_MOVIE = 'VIEW_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';

export const toggleModal = (payload) => ({
	type: TOGGLE_MODAL, payload
})

export const viewMovie = (payload) => ({
	type: VIEW_MOVIE, payload
})

export const movieUpdate = (payload) => ({
	type: UPDATE_MOVIE, payload
})

export const deleteMovie = (payload) => ({
	type: DELETE_MOVIE, payload
})

export const formSubmit = (payload) => ({
	type: FORM_SUBMIT, payload
})