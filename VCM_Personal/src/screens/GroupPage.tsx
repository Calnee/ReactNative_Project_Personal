import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonButton from '../components/CommonButton';

const GroupPage = () => {
    return(
        <View style={styles.mainStyle}>
            <Text>Group Page</Text>
            <CommonButton title={'Browse'} passedFunction={''} values={{
                emailValue: '',
                pswdValue: ''
            }} functionality={''} statusCode={''} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainStyle: {
      backgroundColor:'white',
      padding:20,
      height:800
    },
    
  });
export default GroupPage;