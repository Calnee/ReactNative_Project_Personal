import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import ContactListComponent from '../components/ContactList';
import {User} from '../network/ContactListHook';

const HomePage = () => {
  // const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  // const userToken = useSelector((state: any) => state.tokenReducer.token);
  const contacts = useSelector((state: any) => state.tokenReducer.contact_name);

  // const [contact, setContactList] = useState('');
  // useEffect(() => {
  //   const setContactList = async () => {
     

  //     setContactList();
  //   };
  // }, []);

  return (
    <View style={styles.mainStyle}>
      <Text style={styles.titleText}>Contacts</Text>
      <View>
        <TextInput style={styles.textInput} placeholder="Search contacts" />
        <MaterialCommunityIcons
          name="account-search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
      </View>

      <View>
        <ContactListComponent
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          }}
          value={contacts}
        />
      </View>

      <MaterialCommunityIcons
          name="camera"
          size={45}
          color="#666"
          style={styles.cameraIcon}
        />
      <View style={styles.cameraBox}>
      </View>
     

      {/* <Text>User State: {isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
      <Text>User Token: {userToken}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    padding: 20,
    backgroundColor:'white',
    height:900
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
    position: 'relative',
  },
  textInput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    padding: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 314,
    bottom: 14,
  },
  cameraBox: {
    position:'absolute',
    backgroundColor: '#A1D5E3',
    padding: 10,
    width: 90,
    height:90,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left:270,
    bottom: -160,
  },
  cameraIcon: {
    left:290,
    bottom: -190,
    borderRadius:20
  }
});

export default HomePage;
