import {createStore, combineReducers} from 'redux';
import userReducer from './redux/userReducer';
import itemReducer from './redux/itemReducer';
import productReducer from './redux/productReducer';

const rootReducer = combineReducers({
  userReducer,
  item: itemReducer,
  product: productReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
