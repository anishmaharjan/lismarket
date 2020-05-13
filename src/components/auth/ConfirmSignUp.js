import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Container} from 'native-base';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';

import {confirmSignUp} from '../../redux/actions/auth';
import {connect} from 'react-redux';

import gas from '../styles';

const ConfirmSignUp = props => {
  const {user, fetchingConfirmSignUp, dispatch, confirmSignUp} = props;
  const [form, setForm] = useState({});

  return (
      <Container>
      <View>
        <Text style={css` font-size: 18px; color: ${gas.text}; padding: 10px 20px`}>Create a new user</Text>
        <Input
            value={user && user.username}
            placeholder='Username'
            onChangeText={val => setForm(prev => ({...prev, username: val}))}
            autoCapitalize='none'
            containerStyle={css`
            padding: 10px 20px;
            `}
        />
        <Input
            placeholder='Confirmation Code'
            onChangeText={val => setForm(prev => ({...prev, code: val}))}
            autoCapitalize='none'
            containerStyle={css`
            padding: 10px 20px;
            `}
        />
        <Button
            title="Verify Code"
            style={css`
            padding: 10px 20px;
            `}
            onPress={() => dispatch(confirmSignUp(form))}
            loading={fetchingConfirmSignUp}
            buttonStyle={{
              backgroundColor: gas.btn,
            }}
        />
      </View>
      </Container>
  );
};

export default connect(state => ({
  user: state.auth.user,
}), dispatch => ({
  dispatch,
  confirmSignUp,
}))(ConfirmSignUp);
