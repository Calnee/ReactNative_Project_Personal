import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/authentication/LoginPage';
import SignUpPage from '../screens/authentication/SignUpPage';
import SendOtpPage from '../screens/authentication/SendOtpPage';
import VerifyOtpPage from '../screens/authentication/VerifyOtpPage';

const StackNav = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="SignUpPage"
        component={SignUpPage}
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen
        name="SendOtpPage"
        component={SendOtpPage}
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen
        name="VerifyOtpPage"
        component={VerifyOtpPage}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}


