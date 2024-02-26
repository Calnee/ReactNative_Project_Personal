import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import CommonButton from '../components/CommonButton';
import { loginUser } from './ProfilePageHook';

const ProfilePage = () => {


  const [profileDetails, setProfile] = useState('');
  useEffect(() => {
      const setProfile = async () => {

        let {fullName,
          email,
          totalContacts,
          totalAcceptedCards,
          totalPendingCards,} = await loginUser({
          UserId: props.values.userId,
        });
       
        setProfile();
      };
    }, []);

  const userReducerState = useSelector((state: any) => state.userReducer);
  // Extract individual properties from the state
  const {
    isLoggedIn,
    fullName,
    email,
    totalContacts,
    totalAcceptedCards,
    totalPendingCards,
  } = userReducerState;
  const firstLetter = fullName ? fullName[0].toUpperCase() : '';

  return (
    <View style={styles.commonFeature}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{firstLetter}</Text>
      </View>
      <Text style={styles.titleText}>Hi {fullName}!</Text>
      <Text>{email}</Text>
      <Text style={styles.detailText}>Total Contacts: {totalContacts}</Text>
      <CommonButton
        title={'View Shared Contacts'}
        passedFunction={'LoginPage'}
        values={{
          emailValue: '',
          pswdValue: '',
        }}
        functionality={'Logout'}
        statusCode={''}
      />

      <CommonButton
        title={'Change Password'}
        passedFunction={'LoginPage'}
        values={{
          emailValue: '',
          pswdValue: '',
          userId:''
        }}
        functionality={'Logout'}
        statusCode={''}
      />

      <CommonButton
        title={'Logout'}
        passedFunction={'LoginPage'}
        values={{
          emailValue: '',
          pswdValue: '',
          userId:''
        }}
        functionality={'Logout'}
        statusCode={''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commonFeature: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    padding: 30,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    color:'black'
  },
  detailText: {
    fontSize: 20,
    color:'black'
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#dc143c', // You can change the color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Adjust as needed
  },
  circleText: {
    fontSize: 20,
    color: 'white', // You can change the color
  },
});
export default ProfilePage;
