import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './redux/userReducer';
import itemReducer from './redux/itemReducer';
import productReducer from './redux/productReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({
  userReducer,
  item: itemReducer,
  product: productReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
