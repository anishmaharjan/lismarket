import React, {useState} from 'react';
import {Container} from 'native-base';
import {Text, View} from 'react-native';
import {css} from '@emotion/native';
import {Input, Button} from 'react-native-elements';
import {signUp} from '../../redux/actions/auth';
import {connect} from 'react-redux';
import gas from '../styles';

const SignIn = props => {
  const {navigation} = props;
  const {fetchingSignUp, dispatch, signUp} = props;

  const [form, setForm] = useState({
    userGroup: 'user',
  });

  const submitForm = () => {
    // Validation
    if (!parseInt(form.phone_number)) {
      console.log('no return');
      return;
    }

    dispatch(signUp(form, () => {
      navigation.navigate('ConfirmSignUpScreen');
    }));
  };

  return (
      <Container style={css}>
      <View style={css}>
        <Text style={css` font-size: 18px; padding: 10px 20px`}>Create a new user</Text>
        <Input
            placeholder='Username'
            onChangeText={val => setForm(prev => ({...prev, username: val}))}
            autoCapitalize='none'
            containerStyle={css`
            padding: 10px 20px;
            `}
        />
        <Input
            placeholder='Email'
            onChangeText={val => setForm(prev => ({...prev, email: val}))}
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
        <Input
            placeholder='Phone Number'
            keyboardType='numeric'
            onChangeText={val => setForm(prev => ({...prev, phone_number: val}))}
            containerStyle={css`padding: 10px 20px;`}
        />

        <Button
            title="Create your user"
            style={css`
            padding: 10px 20px;
            `}
            buttonStyle={{
              backgroundColor: gas.btn,
            }}
            onPress={submitForm}
            loading={fetchingSignUp}
        />
        <Button
            title="* or confirm sign up code"
            type="clear"
            titleStyle={{
              color: gas.btn,
            }}
            onPress={() => navigation.navigate('ConfirmSignUpScreen')}
        />
      </View>
      </Container>
  );
};
export default connect(state => ({
  fetchingSignUp: state.auth.fetchingSignUp
}), dispatch => ({
  dispatch,
  signUp,
}))(SignIn);
