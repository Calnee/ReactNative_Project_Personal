import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LogOutButton from '../components/LogOutButton';
import { useSelector } from 'react-redux';

const ProfilePage = () => {

    return(
        <View>
           <LogOutButton title={'Logout'} passedFunction={'LoginPage'} values={{
                emailValue: '', pswdValue: ''
            }} functionality={'Logout'} />
        </View>
    );
}

export default ProfilePage;