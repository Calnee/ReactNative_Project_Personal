import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const SendOtpButton = () => {

  const [count, setCount] = useState<number>(0) ;
  const navigation = useNavigation();

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('The result:', count);
    navigation.navigate('VerifyOtpPage' as never);
  };
  
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={(onPress)}>
        <Text style={styles.textColor}>Send OTP</Text>
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

export default SendOtpButton;
