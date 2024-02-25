import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import CommonButton from '../components/CommonButton';

const ProfilePage = () => {

    return(
        <View>
           <CommonButton title={'Logout'} passedFunction={'LoginPage'} values={{
                emailValue: '', pswdValue: ''
            }} functionality={'Logout'} statusCode={''} />
        </View>
    );
}

export default ProfilePage;