import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const VerifyOtpButton = () => {

  const [count, setCount] = useState<number>(0) ;

  const onPress = ()=> {
    setCount(prevCount => prevCount+1);
    console.log('The result:',count);
  }
  
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={(onPress)}>
        <Text style={styles.textColor}>Verify</Text>
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

export default VerifyOtpButton;
