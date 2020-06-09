import React, {useEffect} from 'react';
import {Container} from 'native-base';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {getPurchaseHistoryApi} from '../../redux/actions/user';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import gss from '../variables.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Footer from '../Footer';
import moment from 'moment';

const PurchaseHistory = props => {
  const {authUser, user, dispatch, getPurchaseHistoryApi} = props;
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getPurchaseHistoryApi(authUser.sub));
  }, [authUser.sub, dispatch, getPurchaseHistoryApi]);

  const orderStatus = order => {
    if (order.collectionReady === true && order.sentPackaging === true) {
      return <Text>Order collected.</Text>;
    }
    if (order.collectionReady === true && order.sentPackaging === false) {
      return <Text>Order is pending to be picked up.</Text>;
    }
    if (order.collectionReady === false && order.sentPackaging === true) {
      return <Text>Your order are being processed.</Text>;
    }
    if (order.collectionReady === false && order.sentPackaging === false) {
      return (
        <Text
          style={css`
            ${tm.primary}
          `}>
          Your order has been placed.
        </Text>
      );
    }
  };

  return (
    <Container>
      <View
        style={css`
          ${tm.paddingWalls}
          height: 90%;
        `}>
        {user &&
          user.orders &&
          user.orders.items &&
          user.orders.items.length === 0 && (
            <Text> No purchases made yet.</Text>
          )}
        <ScrollView>
          {user &&
            user.orders &&
            user.orders.items &&
            user.orders.items.map((order, key) => (
              <TouchableOpacity
                key={key + 'purchase-orders'}
                style={css`
                  ${tm.borderBottom}
                  margin-bottom: 15px;
                `}
                onPress={() =>
                  navigation.navigate('PurchaseDetailsScreen', {
                    order,
                  })
                }>
                <View>
                  <View
                    style={css`
                      ${tm.flexRow}
                    `}>
                    <FontAwesome5
                      name={'receipt'}
                      style={css`
                        font-size: 16px;
                        padding: 3px 5px;
                        color: ${gss.primary};
                      `}
                    />
                    <Text
                      style={css`
                        ${tm.h2}
                      `}>
                      Order No.: #{order.invoiceNumber}
                    </Text>
                  </View>
                </View>
                <View
                  style={css`
                    ${tm.flexRow}
                    justify-content: space-between;
                  `}>
                  <View>
                    <Text>
                      {moment(order.createdAt).format(
                        'dddd, Do MMMM YYYY, h:mm:ss a',
                      )}
                    </Text>
                    <Text>Paid by: {order.paymentType.toUpperCase()}</Text>
                    <Text>Comments: {order.comment}</Text>
                    <Text
                      style={css`
                        font-weight: bold;
                      `}>
                      Status: {orderStatus(order)}
                    </Text>
                  </View>
                  <View>
                    <FontAwesome5
                      name={'angle-right'}
                      style={css`
                        font-size: 24px;
                        padding: 3px 5px;
                        color: ${gss.primary};
                      `}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
)(PurchaseHistory);
