import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

type ItemProps = { name: string; nameInitial: string };

const Item = ({ name, nameInitial }: ItemProps) => (
    <View style={styles.storyContainer}>
      <Text>{nameInitial}</Text>
      <Text>{name}</Text>
    </View>
  );

  const ContactList = () = {
    return();
  }

  const styles = StyleSheet.create({
    storyContainer: {
      padding: 10,
      alignItems: 'center',
    },
    mainStyle: {
      padding:20,
    },
    storyImage: {
      width: 75,
      height: 75,
      borderRadius: 65,
      borderColor: 'red',
      borderWidth: 4,
    },
  });
  