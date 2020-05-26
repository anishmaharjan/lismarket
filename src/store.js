import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './redux/userReducer';
import itemReducer from './redux/itemReducer';
import categoryReducer from './redux/categoryReducer';
import productReducer from './redux/productReducer';
import orderReducer from './redux/orderReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import authReducer from './redux/actions/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  item: itemReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
