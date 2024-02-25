import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import CommonButton from '../../components/CommonButton';

const VerifyOtpPage = () => {
  return (
    <View style={styles.commonFeature}>
      <Image
        style={styles.expLogo}
        source={require('../../assets/experion.png')}
      />

      <View style={styles.formFieldRow}>
        <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder=""
        />
          <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder=""
        />
          <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder=""
        />
          <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder=""
        />
          <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder=""
        />
          <TextInput
          style={[styles.formField, styles.formGap1]}
          placeholder=""
        />
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
