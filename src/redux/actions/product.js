import {API, graphqlOperation} from 'aws-amplify';
import {listProducts} from '../../graphql/queries';
import {createProduct} from '../../graphql/mutations';
import {
  LIST_PRODUCT,
  LIST_PRODUCT_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
} from '../types';

export const listAllProducts = () => (dispatch) => ({
  type: LIST_PRODUCT,
  payload: API.graphql(graphqlOperation(listProducts)).then(result => {
        dispatch({
          type: LIST_PRODUCT_SUCCESS,
          payload: result.data,
        });
      },
  ).catch(e => console.log("*error", e)),
});

export const addProduct = (product) => (dispatch) => ({
  type: ADD_PRODUCT,
  payload: API.graphql(graphqlOperation(createProduct, {input: product})).then(result => {
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: result.data.createProduct,
        });
      },
  ).catch(e => console.log('Error add product', e)),
});
