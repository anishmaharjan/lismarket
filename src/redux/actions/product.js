import {API, graphqlOperation} from 'aws-amplify';
import {listProducts} from '../../graphql/queries';
import {
  LIST_PRODUCT,
  LIST_PRODUCT_SUCCESS,
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
