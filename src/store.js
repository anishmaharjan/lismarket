import {createStore, combineReducers} from 'redux';
import userReducer from './redux/userReducer';
import itemReducer from './redux/itemReducer';

const rootReducer = combineReducers({
  userReducer,
  item: itemReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
