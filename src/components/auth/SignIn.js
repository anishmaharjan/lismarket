import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Container} from 'native-base';
import styled, {css} from '@emotion/native';
import {Input, Button} from 'react-native-elements';
import {signIn} from '../../redux/actions/auth';
import {getUserApi} from '../../redux/actions/user';

import gas from '../styles';

const SignIn = props => {
  const {navigation} = props;
  const {fetchingSignIn, dispatch, signIn, getUserApi} = props;

  const [form, setForm] = useState({});

  const submitForm = () => {
    dispatch(signIn(form, (userData) => {
      dispatch(getUserApi(userData.email))
    }));
  };

  return (
      <Container>
        <View style={css`
        margin-top: 30px;`}>
          <Text style={css`
          font-size: 24px; 
          color: ${gas.text};
          padding: 10px 20px`}>Sign in to your account</Text>
          <Input
              placeholder='Username'
              onChangeText={val => setForm(prev => ({...prev, username: val}))}
              autoCapitalize='none'
              containerStyle={css`
            padding: 10px 20px;
            `}
          />
          <Input
              placeholder='Password'
              onChangeText={val => setForm(prev => ({...prev, password: val}))}
              secureTextEntry={true}
              containerStyle={css`padding: 10px 20px;`}
          />
          <Button
              title="Sign in"
              style={css`
              padding: 10px 20px;
            `}
              buttonStyle={{
                backgroundColor: gas.btn,
              }}
              onPress={submitForm}
              loading={fetchingSignIn}
          />
          <Button
              title="- or sign up -"
              type="clear"
              titleStyle={{
                color: gas.btn,
              }}
              onPress={() => navigation.navigate('SignUpScreen')}
          />
        </View>
      </Container>
  );
};
export default connect(state => ({
  fetchingSignIn: state.auth.fetchingSignIn,
}), dispatch => ({
  dispatch,
  signIn,
  getUserApi
}))(SignIn);
