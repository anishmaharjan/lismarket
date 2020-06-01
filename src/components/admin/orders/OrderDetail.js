import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { css } from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Button } from 'native-base';
import { completedPackaging } from '../../../redux/actions/order';
import { listOrders } from '../../../graphql/queries';
import moment from 'moment';

const OrderDetail = props => {

  const { navigation } = props;
  const { orderItems, orderDetails } = props.route.params;
  const { dispatch, completedPackaging, updatingOrderSuccess } = props;

 
  const PackagingComplete = orderId => {
    dispatch(completedPackaging(orderId));
  };

  useEffect(() => {
    if (updatingOrderSuccess === true) {
      navigation.goBack();
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={{ paddingLeft: 20, paddingTop: 5 }}><Icon name="clipboard" size={20} color="#74D4DE" /> <Text style={{ fontSize: 20 }}>Invoice No: {orderDetails.invoiceNumber}</Text></Text>
        <Text style={{ paddingLeft: 20, paddingTop: 5, fontSize: 16 }}>Placed on {moment(orderDetails.createdAt).format("DD MMM, YYYY")}</Text>
      </View>
      <ScrollView>
        {orderItems && orderItems.items && orderItems.items.map((item, value) =>
          <View style={styles.itemContainer}>
            <View style={{ marginLeft: 10 }}>
              {item.product && Object.values(item.product).map((k) =>
                <Text style={{ fontSize: 20 }}>{k}</Text>
              )}             
              <Text style={{ fontSize: 20 }}>QUANTITY: {item.orderQuantity} </Text>
            </View>
          </View>)
        }
      </ScrollView>
      <View>
        {orderDetails.collectionReady ?
          <Button style={{ justifyContent: 'center', backgroundColor: '#74D4DE', borderRadius: 5 }}><Text style={{ fontSize: 20, color: '#FFF' }}>Order Already Packed</Text></Button> :
          <Button onPress={()=> PackagingComplete(orderDetails.id)} style={{ justifyContent: 'center', backgroundColor: '#FC8369', borderRadius: 5 }}><Text style={{ fontSize: 20, color: '#FFF' }}>Packaging Complete</Text></Button>
        }

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    padding: 5,
    backgroundColor: '#FAF7F7',
    height: 100,
    marginBottom: 1,
  },
  itemContainer: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#FC8369',
    flexDirection: 'column',
    marginBottom: 5,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1
  }

});

export default connect(state => ({
  updatingOrderSuccess: state.order.updatingOrderSuccess
}), dispatch => ({
  dispatch,
  completedPackaging,
}),
)(OrderDetail);