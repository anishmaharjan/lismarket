import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { css } from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { listOrder, editOrder, sentPackaging } from '../../../redux/actions/order';


const Order = props => {

  const { dispatch, orderList, listOrder, editOrder, updatingOrderSuccess } = props;

  const sendPackaging = orderId => {
    dispatch(sentPackaging(orderId));
  };

  useEffect(() => {
    !orderList && dispatch(listOrder());
  }, [dispatch, listOrder]);

  useEffect(() => {
    if (updatingOrderSuccess === true) {
      dispatch(listOrder());
    }
  }, [updatingOrderSuccess, dispatch]);

  return (
    <ScrollView style={styles.container}>
      {orderList && orderList.items &&
        orderList.items.map((item, value) =>
          <View style={styles.itemContainer}>
            <View style={styles.headingContainer}>
              <Text style={{ paddingLeft: 20, paddingTop: 5, marginBottom:10 }}><Icon name="clipboard" size={20} color="#74D4DE" /> <Text style={{ fontSize: 20 }}>Invoice No: {item.invoiceNumber}</Text></Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 3 }}>
              <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={{ paddingLeft: 20, paddingTop: 10, fontSize: 20 }}> Mr. Puffy Puff</Text>
                <Text style={{ paddingLeft: 20, paddingTop: 2, fontSize: 16 }}> May 22, 2020 </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'row', paddingTop: 10 }}>
                <TouchableOpacity>{item.sentPackaging ? <Icon name="bell-o" size={30} color="#FC8369" /> : <Icon name="cube" size={30} color="#74D4DE" onPress={() => sendPackaging(item.id)} />}</TouchableOpacity>
                <TouchableOpacity><Icon name="chevron-right" size={30} color="#74D4DE" onPress={() =>
                  props.navigation.navigate('OrderDetail', {
                    orderItems: item.orderItems,
                    orderDetails: item
                  })} /></TouchableOpacity>
              </View>
            </View>
          </View>)
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#74D4DE',
    padding: 1,
  },
  itemContainer: {
    padding: 5,
    backgroundColor: '#FAF7F7',
    height: 125,
    borderBottomWidth: 7,
    borderBottomColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1
  }

});

export default connect(state => ({
  orderList: state.order.orderList,
  updatingOrderSuccess: state.order.updatingOrderSuccess
}), dispatch => ({
  dispatch,
  listOrder,
  sentPackaging
}))(Order);