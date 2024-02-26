import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import GroupPage from '../screens/GroupPage';

const StackNav = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomNav.Navigator>
    <BottomNav.Screen
      name="HomePage"
      component={HomePage}
      options={{
        headerShown: false,
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="badge-account-horizontal-outline" color={color} size={size} />
        ),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}
    />

    {/* <BottomNav.Screen
      name="Groups"
      component={GroupPage}
      options={{
        headerShown: false,
        tabBarLabel: 'Groups',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={size} />
        ),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}
    /> */}

    <BottomNav.Screen
      name="ProfilePage"
      component={ProfilePage}
      options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}
    />
  </BottomNav.Navigator>
);

export function HomestackNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="ContactPage"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
