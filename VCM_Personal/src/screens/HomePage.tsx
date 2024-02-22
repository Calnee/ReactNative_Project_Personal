import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = () => {
  return (
    <View style={styles.mainStyle}>
      <Text style={styles.titleText}>Contacts</Text>
      <View >
        <TextInput style={styles.textInput} placeholder="Search contacts" />
        <MaterialCommunityIcons
          name="account-search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    padding: 30,
  },
  titleText: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  inputField: {
    flexDirection: 'row',
    position:'relative'
  },
  textInput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    padding: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 314,
    bottom:14
  },
});

export default HomePage;
