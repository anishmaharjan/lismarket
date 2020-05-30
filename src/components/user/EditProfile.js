import React, {useState} from 'react';
import {Container} from 'native-base';
import {ScrollView, Text, View} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import * as tm from '../theme.style';
import gas from '../variables.styles';
import {authUpdateUser} from '../../redux/actions/auth';

const EditProfile = props => {
  const {authUser, navigation, dispatch, authUpdateUser} = props;
  const [form, setForm] = useState({});

  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  const submitForm = () => () => {
    dispatch(authUpdateUser(form));
  };

  return (
    <Container>
      <View
        style={css`
          ${tm.paddingWalls}
        `}>
        <Text>Name</Text>
        <Input
          placeholder="(eg. John Doe)"
          defaultValue={authUser.name}
          onChangeText={val => handleChange('name', val)}
        />
        <Text>Phone</Text>
        <Input
          placeholder="+61 4xx xxx xxx"
          defaultValue={authUser.phone_number}
          onChangeText={val => handleChange('phone_number', val)}
        />
        <Text>Address</Text>
        <Input
          placeholder="(eg. 3 Street, ...)"
          defaultValue={authUser.address}
          onChangeText={val => handleChange('address', val)}
        />
        <Text>Profile Url</Text>
        <Input
          placeholder="(eg. https:\\...)"
          defaultValue={authUser.profile}
          onChangeText={val => handleChange('profile', val)}
        />
        <Button
          onPress={submitForm()}
          title="Edit profile"
          style={css`
            padding: 10px 20px;
          `}
          buttonStyle={css`
            background-color: ${gas.primary};
          `}
        />

        <Button
          onPress={() => navigation.goBack()}
          title="Cancel"
          type="outline"
          style={css`
            padding: 10px 20px;
          `}
          buttonStyle={css`
            border-color: ${gas.primary};
          `}
          titleStyle={css`
            color: ${gas.primary};
          `}
        />
      </View>
    </Container>
  );
};
export default connect(
  state => ({
    authUser: state.auth.authUser,
  }),
  dispatch => ({
    dispatch,
    authUpdateUser,
  }),
)(EditProfile);
