import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {getPurchaseHistoryApi} from '../../redux/actions/user';
import styled, {css} from '@emotion/native';
import * as tm from '../theme.style';
import gss from '../variables.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {monefy} from '../../util';
import Footer from '../Footer';

const PurchaseDetails = props => {
  const {route, user} = props;
  const {order} = route.params;

  const Text = styled.Text``;

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
          <View
            style={css`
              margin-bottom: 10px;
              padding: 10px;
              border-color: #8908ec;
              border-width: 1px;
              // background: #e293de;
            `}>
            <Text
              style={css`
                ${tm.h1}
                text-align: center;
                color: #2c6837;
              `}>
              Invoice:
              {monefy(
                order &&
                  order.orderItems &&
                  order.orderItems.items &&
                  order.orderItems.items.reduce(
                    (total, item) => total + item.amount * item.orderQuantity,
                    0,
                  ),
              )}
            </Text>
          </View>

          <View>
            {order &&
              order.orderItems &&
              order.orderItems.items &&
              order.orderItems.items.map((item, key) => (
                <View
                  key={key + 'order-items'}
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
                          ${tm.h3}
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
