import React, {useState, useEffect} from 'react';
import {Container} from 'native-base';
import {ScrollView, Text, View} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import * as tm from '../../theme.style';
import gas from '../../variables.styles';
import {editUser, getAllUsers} from '../../../redux/actions/user';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {authUpdateGroup} from '../../../redux/actions/auth';

const UserGroupEdit = props => {
  const {authUser, navigation, dispatch, updateUserSuccess, authUpdateGroup} = props;

  const {user} = props.route.params;

  const [form, setForm] = useState({
    //id: user.id,
    });

  const handleDropdown = ({value}) => {
    setForm(prev => ({...prev, 'custom:userGroup':value}));
  };

  const submitForm = () => () => {
    dispatch(authUpdateGroup(form));
  };

    /*useEffect(()=>{
        if(updateUserSuccess == true){
        dispatch(getAllUsers());
        navigation.goBack(); }
    })*/

  const userGroups = [
    {label:'Admin', value:'admin'},
    {label:'Inventory Manager', value:'manager'},
    {label:'User', value:'user'},
  ];

  return (
    <Container>
      <View
        style={css`
          ${tm.paddingWalls}
        `}>
        <Text>User Group</Text>
        <DropDownPicker
        items= {userGroups}
        placeholder="Select a category"
        defaultValue = {user.userGroup}
        containerStyle={{height: 60}}
        activeLabelStyle={{color: 'red'}}
        onChangeItem={handleDropdown}
      />     
      <Button
          onPress={submitForm()}
          title="Submit"
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
    updateUserSuccess: state.user.updateUserSuccess,
  }),
  dispatch => ({
    dispatch,
    editUser,
    getAllUsers,
    authUpdateGroup
  }),
)(UserGroupEdit);
