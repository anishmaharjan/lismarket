import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, Text, View} from 'react-native';
import {Container} from 'native-base';
import {createUserApi, getAllUsers} from '../../../redux/actions/user';
import {getUserInfo} from '../../../redux/actions/auth';
import {css} from '@emotion/native';
import gas from '../../variables.styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
        <View style={css`
        `}>
          {
            userList && userList.items && userList.items.map((v, key) => (
                <View key={key} style={css`
                border-bottom-width: 1px;
                border-bottom-color: #74D4DE;
                padding: 10px 20px;
                background-color: #FAF7F7;
                `}>
                 <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                     <Text style={{paddingLeft: 5, paddingTop: 35}}><Icon name="user" size={26} color="#FC8369" /></Text>
                  </View>

                  <View style={{ flex: 1,padding: 35, alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={css`
                  font-size: 16px;
                  `}>Anish Maharjan</Text>
                  <Text style={css`
                  font-size: 16px;
                  `}>{v.email}</Text>
                  <Text style={css`
                  font-size: 16px;
                  `}>{v.contactNo}</Text>
                  </View>
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
