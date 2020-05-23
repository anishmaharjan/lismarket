import React, {Component, useEffect, useState} from 'react';
import {Image, ScrollView, View, Text, TextInput, TouchableHighlight, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Header, Left, Right} from 'native-base';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Cart = props => {
  const [text, setText] = useState('');
  const {title} = props;

  const onChange = textValue => {setText(textValue);};

  const incrementInteger = () => {
    {qty = myInteger + 1;}
    ;
    {setText(3);}
  };
  const decrementInteger = () => {
    {myInteger = myInteger - 1;}
    ;
  };
  return (
      <Container>
        <ScrollView>
          <View style={{height: 80, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around', backgroundColor: '#FAF7F7'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#FC8369', fontSize: 26}}>Total $ 4.80</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={css.btn}>
                <Text style={css.btnText}>
                  CHECKOUT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 125, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around', backgroundColor: '#FFF'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={{uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                     style={{width: 100, height: 100}}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#828282', fontSize: 14}}>Coca-cola Bottle 2L</Text>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                <TouchableOpacity style={css.btnQty} onPress={incrementInteger}>
                  <Text style={css.btnQtyTxt}>
                    +
                  </Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Add Item"
                    style={css.input}
                    onChangeText={onChange}
                />
                <TouchableOpacity style={css.btnQty} onPress={decrementInteger}>
                  <Text style={css.btnQtyTxt}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity>
                <Icon name="trash" size={26}/>
              </TouchableOpacity>
              <Text style={{color: '#828282', fontSize: 20}}>$ 2.85</Text>
            </View>

          </View>

        </ScrollView>
      </Container>
  );
};

const css = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  input: {
    height: 60,
    padding: 6,
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#F07021',
    padding: 9,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
  btnQty: {
    backgroundColor: '#FC8369',
    padding: 2,
    margin: 5,
    borderRadius: 10,
    width: 50,
  },
  btnQtyTxt: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Cart;
