import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';
import {createUserApi, getAllUsers} from '../../../redux/actions/user';
import {getUserInfo} from '../../../redux/actions/auth';
import styled, {css} from '@emotion/native';
import gss from '../../variables.styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as tm from '../../theme.style';
import {listUsers} from '../../../graphql/queries';

const AdminUsers = props => {
  const {authUser, userList, dispatch, getUserInfo, getAllUsers} = props;
  const Text = styled.Text`
    ${tm.h3}
  `;

  useEffect(() => {
    dispatch(getAllUsers());
    // dispatch(getUserInfo());
  }, [dispatch, getAllUsers, getUserInfo]);

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
      <ScrollView>
        <View
          style={css`
            ${tm.paddingWalls}
          `}>
          {userList &&
            userList.items &&
            userList.items.map((user, key) => (
              <View
                key={key + 'userList'}
                style={css`
                  ${tm.borderBottom}
                  margin-bottom: 20px;
                `}>
                <View
                  style={css`
                    ${tm.flexRow} justify-content: space-between
                  `}>
                  <View
                    style={css`
                      ${tm.flexRow}
                      align-items: center;
                    `}>
                    <Icon name="user" size={26} color="#FC8369" />
                    <View
                      style={css`
                        margin: 0 10px;
                      `}>
                      <Text>{user.email}</Text>
                      <Text>{user.contactNo}</Text>
                      <Text
                        style={css`
                          font-size: 12px;
                          color: #4f4f4f;
                        `}>
                        (id: {user.id} )
                      </Text>
                      <Text>{user.userGroup}</Text>
                    </View>
                  </View>
                  <View style={css``}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('UserGroupEdit', {
                          user: user,
                        })
                      }>
                      <Text>
                        <Icon name="pencil-square-o" size={30} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default connect(
  state => ({
    authUser: state.auth.authUser,
    userList: state.user.userList,
  }),
  dispatch => ({
    dispatch,
    getAllUsers,
    getUserInfo,
    createUserApi,
  }),
)(AdminUsers);
