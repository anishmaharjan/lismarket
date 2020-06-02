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
import {Container} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {
  listOrder,
  editOrder,
  sentPackaging,
} from '../../../redux/actions/order';
import moment from 'moment';

const Order = props => {
  const {
    dispatch,
    orderList,
    listOrder,
    editOrder,
    updatingOrderSuccess,
  } = props;

  const sendPackaging = orderId => {
    dispatch(sentPackaging(orderId));
  };

  useEffect(() => {
    !orderList && dispatch(listOrder());
  });

  useEffect(() => {
    if (updatingOrderSuccess === true) {
      dispatch(listOrder());
    }
  }, [updatingOrderSuccess, dispatch, listOrder]);

  return (
    <Container>
      <ScrollView>
        {orderList &&
          orderList.items &&
          orderList.items.map((item, value) => (
            <View style={styles.itemContainer}>
              <View style={styles.headingContainer}>
                <Text
                  style={{paddingLeft: 20, paddingTop: 5, marginBottom: 10}}>
                  <Icon name="clipboard-list" size={20} color="#74D4DE" />{' '}
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
                  {console.log('item', item)}
                  <Text
                    style={css`
                      padding: 10px;
                      font-size: 16px;
                    `}>
                    {item.users.email}
                  </Text>
                  <Text>{(item.user && item.user.name) || ''}</Text>
                  <Text style={{paddingLeft: 20, paddingTop: 2, fontSize: 16}}>
                    {' '}
                    {moment(item.createdAt || moment.now()).fromNow()}{' '}
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
                  {item.collectionReady ? (
                    <Icon name="bell" size={30} color="#FC8369" />
                  ) : (
                    <TouchableOpacity>
                      {item.sentPackaging ? (
                        <Icon name="box" size={30} color="#76EE00" />
                      ) : (
                        <Icon
                          name="box"
                          size={30}
                          color="#74D4DE"
                          onPress={() => sendPackaging(item.id)}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity>
                    <Icon
                      name="chevron-right"
                      size={30}
                      color="#74D4DE"
                      onPress={() =>
                        props.navigation.navigate('OrderDetail', {
                          orderItems: item.orderItems,
                          orderDetails: item,
                        })
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
    orderList: state.order.orderList,
    updatingOrderSuccess: state.order.updatingOrderSuccess,
  }),
  dispatch => ({
    dispatch,
    listOrder,
    sentPackaging,
  }),
)(Order);
