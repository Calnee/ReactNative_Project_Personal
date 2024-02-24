import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../network/LoginHook';
import Constants from '../utils/Constants';
import { setStringItem } from '../utils/Utils';
import { userLogin } from '../context/userSlice';

type ButtonTypes = {
    title: string;
    passedFunction: string;
    values: {emailValue: string; pswdValue: string};
    functionality: string;
    statusCode: string;
  };

const MyButton = (props: ButtonTypes) => {

    const dispatch = useDispatch();
  console.log(props.functionality);
  const ButtonAction = async () => {
    if (props.functionality === 'login') {
      let {token, message, statusCode} = await loginUser({
        loginUserEmail: props.values.emailValue,
        loginPassword: props.values.pswdValue,
      });

      console.log('status is ' + message);
      if (statusCode === '200') {
        setStringItem(Constants.IS_LOGIN, 'true');
        dispatch(userLogin(true));
        //onPressLogin();
      }
    }

    if(props.functionality === 'Logout') {
      setStringItem(Constants.IS_LOGIN, 'false');
      dispatch(userLogin(false));
    }
  };
    return (
        <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            ButtonAction();
          }}>
          <Text style={styles.textColor}>{title}</Text>
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
      height: 45,
      marginLeft: 4,
      marginTop: 10,
    },
    textColor: {
      color: 'white',
    },
  });
  export default MyButton;
