import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, ActivityIndicator, SectionListRenderItemInfo} from 'react-native';
import api from '../network/api';
import { loginUser } from '../network/LoginHook';

type ButtonTypes = {
  title: string,
  passedFunction: string,
  values: {emailValue:string, pswdValue:string},
  functionality: string,
  statusCode: string
}

const ButtonComponent = (props: ButtonTypes) => {

  const navigation = useNavigation();

  const ButtonAction = async () => {
    if(props.functionality === "login") {
      let {statusCode} = await loginUser({
        loginUserEmail: props.values.emailValue,
        loginPassword: props.values.pswdValue,
      })

      if(statusCode ==='200'){
        onPressLogin();
      }
    }
  }

  const onPressLogin = async () => {
    try {
      navigation.navigate('HomePage' as never);
    } catch (error) {
      console.error('Error:', error);
    } 
  };
  
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => { ButtonAction(); onPressLogin(); }}>   
        <Text style={styles.textColor}>Login</Text>
        {/* <ActivityIndicator size="small" color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 10,
    height:45,
    marginLeft:4,
    marginTop: 10
  },
  textColor: {
    color:'white'
  }
});

export default ButtonComponent;
