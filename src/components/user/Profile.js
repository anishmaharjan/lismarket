import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import uuid from 'react-native-uuid';
import {getUserInfo} from '../../redux/actions/auth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faPhone,
  faEnvelope,
  faAddressCard,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

import {Container, Content, Header, Left, Right, Icon} from 'native-base';
import Swiper from 'react-native-swiper';

const Profile = props => {
  const {authUser} = props;
  const {dispatch, getUserInfo} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContentedit}>
          <FontAwesomeIcon icon={faUserEdit} size={20} color={'#FF914D'} />
        </View>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />
          <Text style={styles.name}>Mr. Puffy Puff </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <FontAwesomeIcon icon={faUser} size={20} color={'#FF914D'} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>PuffyPuff</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <FontAwesomeIcon icon={faPhone} size={20} color={'#FF914D'} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>{authUser.phone_number}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <FontAwesomeIcon icon={faEnvelope} size={20} color={'#FF914D'} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>{authUser.email}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <FontAwesomeIcon icon={faAddressCard} size={20} color={'#FF914D'} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>3/6 Pearl Street, Hurstville</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },

  body: {
    backgroundColor: '#FFFFFF',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },

  infoContent: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingBottom: 15,
  },
  iconContent: {
    paddingTop: 38,
    alignItems: 'flex-start',
    paddingLeft: 50,
  },
  iconContentedit: {
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#4F4F4F',
  },
});

export default connect(
  state => ({
    authUser: state.auth.authUser,
  }),
  dispatch => ({
    dispatch,
    getUserInfo,
  }),
)(Profile);
