import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './redux/userReducer';
import itemReducer from './redux/itemReducer';
import categoryReducer from './redux/categoryReducer';
import productReducer from './redux/productReducer';
import orderReducer from './redux/orderReducer';
import thunk from 'redux-thunk';
import authReducer from './redux/actions/authReducer';
import cartReducer from './redux/cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  item: itemReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
