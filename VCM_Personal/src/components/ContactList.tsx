import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type ContactList = {
  onChangeText: (text: string) => void;
  value: string;
  style?: object;
};

const ContactListComponent = (props: ContactList) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {/* <Text style={styles.circleText}>{props.value.charAt(0).toUpperCase()}</Text> */}
      </View>
      <Text style={[styles.formField, props.style]}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formField: {
    flex: 1,
   // borderWidth: 0.7,
    padding: 10,
    marginBottom: 14,
    marginTop: 14,
   // borderRadius: 8,
    backgroundColor: 'white',
    color:'black',
   // borderColor: '#add8e6',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.15,
    // shadowRadius: 3,
    elevation: 3,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase', // Ensure text is always in uppercase
  },
});

export default ContactListComponent;
