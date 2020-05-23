import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {css} from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {Badge} from 'react-native-elements';
import {connect} from 'react-redux';

const Header = props => {
  const navigation = useNavigation();

  const {cart} = props;

  return (
      <View style={css`
      flex-direction: row;
      justify-content: space-between;
      height: 50px;
      padding: 10px 20px;
      `}>
        <TouchableOpacity>
          <Text style={css`
          font-size: 24px;
          `}>LI Market</Text>
        </TouchableOpacity>
        <View>
          <FontAwesome5 name={'shopping-cart'} style={css`
            font-size: 24px;
            padding-bottom: 5px;
            `} onPress={() => navigation.navigate('Cart')}
          >

          </FontAwesome5>
          <Badge
              status="warning"
              value={cart.length}
              containerStyle={css`
              position:absolute;
              top: 5px;
              right: 10px;
              width: 90%;
              `}
          />
        </View>
      </View>
  );
};


export default connect(state => ({
  cart: state.cart.cartItems
}))(Header);
