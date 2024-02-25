import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type fieldInput = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  style?: object;
};

const CommonTextInput = (props: fieldInput) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
      style={[styles.formField]}
    />
  );
};

const styles = StyleSheet.create({
  formField: {
   // flexDirection: 'row',
    borderWidth: 0.7,
    padding: 10,
    marginBottom: 14,
    marginTop: 14,
    gap: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: '#add8e6',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default CommonTextInput;
