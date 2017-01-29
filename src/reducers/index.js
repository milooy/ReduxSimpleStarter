import { combineReducers } from 'redux';
<<<<<<< HEAD
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
=======
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
>>>>>>> react_2
});

export default rootReducer;
