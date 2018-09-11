import React from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'

import MovieList, { reducer as moviesReducer } from './movieList';

const rootReducer = combineReducers({
    form: formReducer,
    movie: moviesReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default () => (
    <Provider store={ store }>
        <MovieList />
    </Provider>
);
