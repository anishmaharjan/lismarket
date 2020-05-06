import {createStore, combineReducers} from 'redux';
import userReducer from './redux/userReducer';

const rootReducer = combineReducers({
  userReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
