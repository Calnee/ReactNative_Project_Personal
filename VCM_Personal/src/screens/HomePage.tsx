import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const HomePage = () => {
    return(
        <View style={styles.mainStyle}>
             <Text style={styles.titleText}>Contacts</Text>
             <TextInput style={styles.textInput} placeholder="Search contacts" />
        </View>   
    );
}

const styles = StyleSheet.create({
    mainStyle: {
        padding:30
    },
    titleText: {
        fontSize:40,
        marginTop: 20,
        marginBottom:20,
        color:'black',
        fontWeight:'bold'
    },
    textInput:{
        backgroundColor:'#dcdcdc',
        borderRadius:15,
        padding:10

    }
})

export default HomePage;