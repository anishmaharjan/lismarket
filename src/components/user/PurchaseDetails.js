import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {getPurchaseHistoryApi} from '../../redux/actions/user';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import gss from '../variables.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {monefy} from '../../util';
import Footer from '../Footer';

const PurchaseDetails = props => {
  const {route, user} = props;
  const {order} = route.params;

  console.log('route', order);

  return (
    <Container>
      <View
        style={css`
          ${tm.paddingWalls}
        `}>
        <ScrollView>
          <View
            style={css`
              ${tm.flexRow}
            `}>
            <FontAwesome5
              name={'receipt'}
              style={css`
                font-size: 22px;
                padding: 3px 5px;
                color: ${gss.primary};
              `}
            />
            <Text
              style={css`
                ${tm.h2}
              `}>
              Order number:
            </Text>
          </View>
          <Text
            style={css`
              ${tm.h1}
              margin-left: 10%;
              margin-bottom: 20px;
            `}>
            #{order.invoiceNumber}
          </Text>
          <Text>
            Status:{' '}
            {order.collectionReady
              ? ' Ready for collection.'
              : ' Item being processed.'}
          </Text>
          <Text
            style={css`
              ${tm.h1}
              color:green;
            `}>
            Total:
            {monefy(
              order.orderItems.items.reduce(
                (total, item) => total + item.amount * item.orderQuantity,
                0,
              ),
            )}
          </Text>
          <View>
            {order.orderItems &&
              order.orderItems &&
              order.orderItems.items.map((item, key) => (
                <View
                  style={css`
                    ${tm.borderBottom}
                  `}>
                  <View
                    style={css`
                      ${tm.flexRow}
                      justify-content: space-between;
                    `}>
                    <View>
                      <View
                        style={css`
                          ${tm.flexRow}
                        `}>
                        <Text
                          style={css`
                            padding: 0 5px;
                          `}>
                          {key + 1}
                        </Text>
                        <Text
                          style={css`
                            ${tm.h2}
                          `}>
                          {item.product.name}
                        </Text>
                      </View>
                      <Text
                        style={css`
                          padding-left: 20px;
                        `}>
                        Qty: {item.orderQuantity} @ {monefy(item.amount)}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={css`
                          font-weight: bold;
                          text-align: right;
                        `}>
                        {monefy(item.orderQuantity * item.amount)}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
      <Footer />
    </Container>
  );
};

export default connect(
  state => ({authUser: state.auth.authUser, user: state.user.user}),
  dispatch => ({
    dispatch,
    getPurchaseHistoryApi,
  }),
)(PurchaseDetails);
