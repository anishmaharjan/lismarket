import {API, graphqlOperation} from 'aws-amplify';
import {SS, ER, CREATE_ORDER} from '../types';
import {createOrder, createOrderItem} from '../../graphql/mutations';

export const createOrderApi = (order, orderItems, callBack) => dispatch =>
  dispatch({
    type: CREATE_ORDER,
    payload: API.graphql(graphqlOperation(createOrder, {input: order}))
      .then(result => {
        /* TODO: Do a bulk insert here */
        orderItems &&
          orderItems.map((itm, key) => {
            dispatch({
              type: 'CREATE_ORDER_ITEMS' + SS,
              payload: API.graphql(
                graphqlOperation(createOrderItem, {
                  input: {
                    orderItemOrderId: result.data.createOrder.id,
                    orderItemProductId: itm.id,
                    orderQuantity: itm.quantity,
                    amount: itm.price,
                  },
                }),
              ),
            });
          });

        dispatch({
          type: CREATE_ORDER + SS,
          payload: result.data.createOrder,
        });

        callBack(result);
      })
      .catch(err => {
        dispatch({
          type: CREATE_ORDER + ER,
          payload: err,
        });
      }),
  });
