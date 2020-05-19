import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, Text, View} from 'react-native';
import {Container} from 'native-base';
import {createUserApi, getAllUsers} from '../../../redux/actions/user';
import {getUserInfo} from '../../../redux/actions/auth';
import {css} from '@emotion/native';
import gas from '../../styles';

const AdminUsers = props => {
  const {authUser} = props;
  const {userList, dispatch, getAllUsers} = props;

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUserInfo());
  }, []);

  const creatThisUser = () => {
    const {attributes} = authUser;
    const user = {
      id: attributes.sub,
      email: attributes.email,
      contactNo: attributes.phone_number,
      userGroup: attributes['custom:userGroup'] || 'user',
    };
    dispatch(createUserApi(user));
  };

  return (
      <Container>
        {console.log(authUser, userList)}
        <View>
          <Text style={css`
          font-size: 24px; 
          color: ${gas.text};
          padding: 10px 20px`}>Users</Text>
        </View>
        <View style={css`
        `}>
          {
            userList && userList.items && userList.items.map((v, key) => (
                <View key={key} style={css`
                border-top-width: 1px;
                border-top-color: #CCC;
                padding: 10px 20px;
                `}>
                  <Text style={css`
                  font-size: 16px;
                  `}>{v.email}</Text>
                  <Text style={css`
                  font-size: 16px;
                  `}>{v.contactNo}</Text>
                </View>))
          }
        </View>
      </Container>
  );
};

export default connect(state => ({
  authUser: state.auth.authUser,

  userList: state.user.userList,
}), dispatch => ({
  dispatch,
  getAllUsers,
  getUserInfo,
  createUserApi,
}))(AdminUsers);
