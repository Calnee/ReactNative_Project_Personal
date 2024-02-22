import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import SignUpButton from '../../components/SignUpButton';


const SignUpPage = () => {
  return (
    <View style={styles.commonFeature}>
      <Image style={styles.expLogo} source={require('../../assets/experion.png')}/>

      <View>
        <TextInput style={[styles.formField, styles.formGap1]} placeholder="Fullname" />
        <TextInput style={[styles.formField, styles.formGap2]} placeholder="email" />
        <TextInput style={[styles.formField, styles.formGap2]} placeholder="password" />
      </View>

      <SignUpButton />

      <Text style={styles.bottomText}>
        Already have an account?  
        <Text style={styles.signUpText}> Log in!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  commonFeature: {
    flex:1,
    flexDirection:'column',
    gap:20,
    padding: 20,
    justifyContent:'center'
  },
  expLogo: {
    width: 200,
    height: 54,
    alignItems:'center',
    marginLeft: 80
  },

  formField: {
    borderWidth: 0.7,
    padding: 10,
    gap:20,
    borderRadius: 8,
    borderColor:'#add8e6',
    backgroundColor:'white',
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3, // for Android
  },
  formGap1: {
    marginTop: 35
  },
  formGap2: {
    marginTop: 30
  },
  bottomText: {
    marginLeft: 80,
    paddingTop: 100,
  },
  signUpText: {
    color: '#1e90ff',
  },

});
export default SignUpPage;
