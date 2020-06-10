import {API, graphqlOperation} from 'aws-amplify';
import {listProducts} from '../../graphql/queries';
import {createProduct} from '../../graphql/mutations';
import {deleteProduct} from '../../graphql/mutations';
import {updateProduct} from '../../graphql/mutations';
import {
  SS,
  ER,
  LIST_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  OUTOFSTOCK_PRODUCT,
} from '../types';

export const listAllProducts = () => dispatch => ({
  type: LIST_PRODUCT,
  payload: API.graphql(graphqlOperation(listProducts, {limit: 20}))
    .then(result => {
      dispatch({
        type: LIST_PRODUCT + SS,
        payload: result.data,
      });
    })
    .catch(err =>
      dispatch({
        type: LIST_PRODUCT + ER,
        payload: err,
      }),
    ),
});

export const addProduct = product => dispatch => ({
  type: ADD_PRODUCT,
  payload: API.graphql(graphqlOperation(createProduct, {input: product}))
    .then(result => {
      dispatch({
        type: ADD_PRODUCT + SS,
        payload: result.data.createProduct,
      });
    })
    .catch(e => {
      console.log('Error add product', e);
      dispatch({
        type: ADD_PRODUCT + ER,
        payload: e,
      });
    }),
});

export const delProduct = productId => dispatch => ({
  type: DELETE_PRODUCT,
  payload: API.graphql(graphqlOperation(deleteProduct, {input: productId}))
    .then(result => {
      dispatch({
        type: DELETE_PRODUCT + SS,
        payload: result.data.deleteProduct,
      });
    })
    .catch(e => {
      console.log('Error delete product', e);
      dispatch({
        type: DELETE_PRODUCT + ER,
        payload: e,
      });
    }),
});

export const editProduct = product => dispatch =>
  dispatch({
    type: UPDATE_PRODUCT,
    payload: API.graphql(graphqlOperation(updateProduct, {input: product}))
      .then(result => {
        dispatch({
          type: UPDATE_PRODUCT + SS,
          payload: result.data.updateProduct,
        });
      })
      .catch(e => {
        dispatch({
          type: UPDATE_PRODUCT + ER,
          payload: e,
        });
      }),
  });

export const outOfStock = () => dispatch => ({
  type: OUTOFSTOCK_PRODUCT,
  payload: API.graphql(
    graphqlOperation(listProducts, {filter: {stockQuantity: {eq: 0}}}),
  )
    .then(result => {
      dispatch({
        type: OUTOFSTOCK_PRODUCT + SS,
        payload: result.data,
      });
    })
    .catch(err =>
      dispatch({
        type: OUTOFSTOCK_PRODUCT + ER,
        payload: err,
      }),
    ),
});
