import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../components/CommonButton';
import CommonFieldInput from '../../components/CommonFieldInput';

const SignUpPage = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('LoginPage' as never);
  };

  return (
    <View style={styles.commonFeature}>
      <Image
        style={styles.expLogo}
        source={require('../../assets/experion.png')}
      />

      <View>
        <CommonFieldInput
          style={[styles.formField]}
          placeholder="Fullname"
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          }}
          value={''}
        />

        <CommonFieldInput
          style={[styles.formField]}
          placeholder="email" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />

        <CommonFieldInput
          style={[styles.formField]}
          placeholder="password" onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          } } value={''}        />
          
      </View>

      <CommonButton
        title="SIGN UP"
        passedFunction={''}
        values={{
          emailValue: '',
          pswdValue: '',
        }}
        functionality={'signUp'}
        statusCode={''}
        backgroundColor='#A1D5E3'
        textColor='black'
      />

      <Text style={styles.bottomText}>
        Already have an account?
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.signUpText}> Log in!</Text>
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
    backgroundColor:'white'
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
    borderColor: '#add8e6',
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3, // for Android
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
