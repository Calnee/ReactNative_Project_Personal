import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpButton = () => {

  const [count, setCount] = useState<number>(0) ;
  const navigation = useNavigation();

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('The result:', count);
    navigation.navigate('LoginPage' as never);
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textColor}>Sign Up</Text>
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
    height:43,
    marginLeft:5,
    marginTop: 10
  },
  textColor: {
    color:'white'
  }
});

export default SignUpButton;