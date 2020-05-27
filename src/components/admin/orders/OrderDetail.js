import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const OrderDetail = props => {

  return (
      <View style = {styles.container}>
             <View style = {styles.itemContainer}>
                      <View style = {styles.headingContainer}>
                        <Text style={{paddingLeft: 20, paddingTop: 5}}><Icon name="clipboard" size={20} color="#74D4DE" /> <Text style={{fontSize:20}}>Order No: #ORDN1234</Text></Text>
                      </View>
                      <View style={{flex: 1, flexDirection :'row', justifyContent: 'center', paddingTop: 1 }}>
                          <View style={{flex: 2,alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{paddingLeft: 20, paddingTop: 10, fontSize: 20}}> Mr. Puffy Puff</Text>
                            <Text style={{paddingLeft: 20, paddingTop: 2, fontSize: 16}}> May 22, 2020 </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-around', flexDirection:'row', paddingTop: 10 }}>
                            <TouchableOpacity><Icon name="cube" size={30} color="#74D4DE" /></TouchableOpacity>
                            <TouchableOpacity><Icon name="chevron-right" size={30} color="#74D4DE" /></TouchableOpacity>                              
                          </View>
                       </View>
               </View>
      </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
     borderBottomWidth: 1,
     borderBottomColor: '#74D4DE',
     padding: 1
  },
  itemContainer: {
       padding: 5,
       backgroundColor: '#FAF7F7',
       height: 110,
       borderBottomWidth: 8,
       borderBottomColor: '#fff',
    },
  container:{
   backgroundColor: '#fff',
   flex : 1
  }

});

export default connect(null,dispatch => ({
      dispatch      
 }))(OrderDetail);