import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import CommonButton from '../../components/CommonButton';
import CommonTextInput from '../../components/CommonFieldInput';

const VerifyOtpPage = () => {
  return (
    <View style={styles.commonFeature}>
      <Image
        style={styles.expLogo}
        source={require('../../assets/experion.png')}
      />

      <View style={styles.formFieldRow}>
        <CommonTextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />
          
          <CommonTextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />

          <CommonTextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />

          <CommonTextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />

          <CommonTextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />

          <CommonTextInput
          style={[styles.formField, styles.formGap1]}
          placeholder="" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />

      </View>

      <CommonButton
        title="Verify" passedFunction={''} values={{
          emailValue: '',
          pswdValue: ''
        }} functionality={'verifyOTP'} statusCode={''} />
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

  formFieldRow:{
    flexDirection: 'row',
    justifyContent:'space-between'
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

});
export default VerifyOtpPage;
