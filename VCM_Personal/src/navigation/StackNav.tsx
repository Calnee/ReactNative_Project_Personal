import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/authentication/LoginPage';
import SignUpPage from '../screens/authentication/SignUpPage';
import ChangePswdPage from '../screens/authentication/ChangePswdPage';
import SendOtpPage from '../screens/authentication/SendOtpPage';
import VerifyOtpPage from '../screens/authentication/VerifyOtpPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import GroupPage from '../screens/GroupPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StackNav = createNativeStackNavigator();

export function HomestackNavigation() {
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
        name="HomePage"
        component={BottomTabNavigator}
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

const BottomNav = createBottomTabNavigator();
export function BottomTabNavigator() {
  return(
    <BottomNav.Navigator>
        <BottomNav.Screen 
    name="HomePage" 
    component={HomePage}
    options={{
      headerShown: false,
      tabBarLabel: 'Contacts',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="badge-account-horizontal-outline" color={color} size={size} />
      ),
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    }}>
    </BottomNav.Screen>

    <BottomNav.Screen 
    name="Groups" 
    component={GroupPage}
    options={{
      headerShown: false,
      tabBarLabel: 'Groups',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="account-group" color={color} size={size} />
      ),
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    }}>
    </BottomNav.Screen>

    <BottomNav.Screen 
    name="ProfilePage" 
    component={ProfilePage}
    options={{
      headerShown: false,
      tabBarLabel: 'Profile',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    }}>
    </BottomNav.Screen>
    </BottomNav.Navigator>
  



  );
  
}
