import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import {Container, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {listOrder} from '../../../redux/actions/order';
import moment from 'moment';
import gss from '../../variables.styles';

const Order = props => {
  const {
    dispatch,
    orderList,
    listOrder,
    updatingOrderSuccess,
    fetchingOrders,
  } = props;

  useEffect(() => {
    dispatch(listOrder());
  }, [dispatch, listOrder]);

  useEffect(() => {
    if (updatingOrderSuccess === true) {
      dispatch(listOrder());
    }
  }, [updatingOrderSuccess, dispatch, listOrder]);

  const ctaButtons = item => {
    if (item.collectionReady === true && item.sentPackaging === true) {
      return <Icon name="clipboard-check" size={30} color="#0f9" />;
    }
    if (item.collectionReady === true && item.sentPackaging === false) {
      return <Icon name="box" size={30} color={gss.primary} />;
    }
    if (item.collectionReady === false && item.sentPackaging === true) {
      return <Icon name="box-open" size={30} color={gss.secondary} />;
    }
    if (item.collectionReady === false && item.sentPackaging === false) {
      return <Icon name="exclamation" size={30} color={gss.primary} />;
    }
  };
  return (
    <Container>
      {fetchingOrders && (
        <>
          <Spinner />
          <Text
            style={css`
              text-align: center;
            `}>
            Fetching Orders
          </Text>
        </>
      )}
      <ScrollView>
        {orderList &&
          orderList.map((item, key) => (
            <TouchableOpacity
              key={key + 'list-invoices'}
              onPress={() =>
                props.navigation.navigate('OrderDetail', {
                  orderItems: item.orderItems,
                  orderDetails: item,
                })
              }
              style={styles.itemContainer}>
              <View style={styles.headingContainer}>
                <Text
                  style={{paddingLeft: 20, paddingTop: 5, marginBottom: 10}}>
                  <Icon name="clipboard-list" size={20} color={gss.primary} />{' '}
                  <Text style={{fontSize: 20}}>
                    Invoice No: {item.invoiceNumber}
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingTop: 3,
                }}>
                <View
                  style={{
                    flex: 2,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={css`
                      padding: 10px;
                      font-size: 16px;
                    `}>
                    {item.users.email}
                  </Text>
                  <Text>{(item.user && item.user.name) || ''}</Text>
                  <Text style={{paddingLeft: 20, paddingTop: 2, fontSize: 16}}>
                    {moment(item.createdAt || moment.now()).fromNow()} -{' '}
                    {moment(item.createdAt).format('YYYY MMM Do')}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    paddingTop: 10,
                  }}>
                  {ctaButtons(item)}
                  <View>
                    <Icon name="chevron-right" size={30} color="#74D4DE" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Container>
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
    backgroundColor: '#f3ffff',
    height: 125,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    marginBottom: 15,
  },
});

export default connect(
  state => ({
    fetchingOrders: state.order.fetchingOrders,
    orderList: state.order.orderList,
    updatingOrderSuccess: state.order.updatingOrderSuccess,
  }),
  dispatch => ({
    dispatch,
    listOrder,
  }),
)(Order);
