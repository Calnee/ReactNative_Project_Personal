import React, { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ButtonComponent from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {

  const [count, setCount] = useState<number>(0) ;
  const navigation = useNavigation();

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('The result:', count);
    navigation.navigate('SendOtpPage' as never);
  };

  const onPress1 = () => {
    navigation.navigate('SignUpPage' as never);
  }

  const [emailValue, setUserEmail] = useState("");
  const [pswdValue, setUserPassword] = useState("");

  return (
    <View style={styles.commonFeature}>
      <Image
        style={styles.expLogo}
        source={require('../../assets/experion.png')}
      />

      <View>
        <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="email"
          value={emailValue}
          onChangeText={emailValue => setUserEmail(emailValue)}
        />
        <TextInput
          style={[styles.formField, styles.formGap2]}
          secureTextEntry={true}
          placeholder="password"
          value={pswdValue}
          onChangeText={pswdValue => setUserPassword(pswdValue)}
        />
      </View>

      <ButtonComponent 
      title="Login"
      passedFunction='HomePage'
      values={{emailValue,pswdValue}}
      functionality="login"
      statusCode='200'
      />

      <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>Forgot Password?</Text>
      </TouchableOpacity>
     
      <Text style={styles.bottomText}>
        Don't have an account?
        
        <TouchableOpacity onPress={onPress1}>
        <Text style={styles.signUpText}> Sign Up!</Text>
        </TouchableOpacity>
       
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commonFeature: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    padding: 20,
    justifyContent: 'center',
  },
 
  expLogo: {
    width: 200,
    height: 54,
    alignItems: 'center',
    marginLeft: 80,
  },

  formField: {
    borderWidth: 0.7,
    padding: 10,
    gap: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: '#add8e6',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3, // for Android
  },
  formGap1: {
    marginTop: 35,
  },
  formGap2: {
    marginTop: 30,
  },
  text: {
    marginLeft: 125,
    marginTop: 10,
  },
  bottomText: {
    marginLeft: 80,
    paddingTop: 100,
  },
  signUpText: {
    color: '#1e90ff',
  },
});
export default LoginPage;
