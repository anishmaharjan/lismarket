import {API, graphqlOperation} from 'aws-amplify';
import {listProducts} from '../../graphql/queries';
import {createProduct} from '../../graphql/mutations';
import {SS, ER, LIST_PRODUCT, ADD_PRODUCT} from '../types';

export const listAllProducts = () => dispatch => ({
  type: LIST_PRODUCT,
  payload: API.graphql(graphqlOperation(listProducts))
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
