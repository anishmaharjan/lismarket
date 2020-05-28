import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container} from 'native-base';
import {css} from '@emotion/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as tm from '../theme.style';
import {monefy} from '../../util';
import {useNavigation} from '@react-navigation/native';

const PaymentSuccess = props => {
  const {route} = props;
  const {amountPaid, order} = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <View
        style={css`
          align-items: center;
          justify-content: center;
          height: 35%;
          background-color: #ffe;
        `}>
        <FontAwesome5
          name={'check-circle'}
          style={css`
            font-size: 120px;
            color: #50df90;
            padding-bottom: 5px;
          `}
        />
      </View>
      <View
        style={css`
          ${tm.paddingWalls}
        `}>
        <Text
          style={css`
            ${tm.h1}
            padding-bottom: 20px;
            text-align: center;
          `}>
          Payment successful
        </Text>
        <View
          style={css`
            align-items: center;
          `}>
          <Text>Payment type: {order.paymentType}</Text>
          <Text>For order number: {order.invoiceNumber}</Text>
          <Text>Payment made: {monefy(amountPaid || 0)}</Text>
        </View>
        <View
          style={css`
            margin: 30px;
          `}>
          <TouchableOpacity
            style={css`
              ${tm.btn}
              align-items: center;
            `}>
            <Text
              style={css`
                ${tm.btnText}
              `}
              onPress={() => navigation.popToTop()}>
              Go back home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default PaymentSuccess;
